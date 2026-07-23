"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

// NOTE ON AVAILABILITY
// The site is a static export (`output: "export"`), so there is no server and
// no database. Booked slots come from content/discovery-call/index.mdx and are
// only as current as the last deploy — two people can book the same slot in
// between. For real availability, swap this component for a booking service
// (Cal.com, Calendly, SavvyCal) that owns the calendar.

const FIELD_CLASSES =
  "w-full rounded-form border-2 border-neutral-darkest bg-transparent px-3 py-2 text-scheme-text transition-all duration-200 placeholder:text-neutral-darkest-60 hover:bg-neutral-darkest-5 focus-visible:ring-2 focus-visible:ring-neutral-darkest focus-visible:ring-offset-2 focus-visible:outline-none";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Deliberately loose: international formats vary far too much to police here.
const PHONE_PATTERN = /^[+()\d][\d\s()-]{6,}$/;

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const pad = (n) => String(n).padStart(2, "0");
const toDateKey = (date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};
const fromMinutes = (mins) => `${pad(Math.floor(mins / 60))}:${pad(mins % 60)}`;

/**
 * Weekdays from today to Friday of this week, then Monday–Friday of next week,
 * kept in separate weeks. Run on the client: computing at build time would
 * freeze the dates at deploy.
 */
function buildDays(now) {
  const dow = now.getDay(); // 0 Sun … 6 Sat
  const addDays = (offset) => {
    const date = new Date(now);
    date.setDate(now.getDate() + offset);
    return date;
  };

  const thisWeek = [];
  const nextWeek = [];

  // The week starts on Sunday, so Sunday's Monday–Friday are *this* week.
  if (dow === 0) {
    for (let i = 1; i <= 5; i++) thisWeek.push(addDays(i));
    for (let i = 8; i <= 12; i++) nextWeek.push(addDays(i));
    return { thisWeek, nextWeek };
  }

  // Saturday is the last day of the week — nothing left in it.
  if (dow === 6) {
    for (let i = 2; i <= 6; i++) nextWeek.push(addDays(i));
    return { thisWeek, nextWeek };
  }

  // Mon–Fri: the rest of this week, then the whole of the next.
  for (let d = dow; d <= 5; d++) thisWeek.push(addDays(d - dow));
  const untilNextMonday = 8 - dow;
  for (let i = 0; i < 5; i++) nextWeek.push(addDays(untilNextMonday + i));

  return { thisWeek, nextWeek };
}

const MIDDAY = 12 * 60;

function buildDay({ date, sessions, slotMinutes, bookedSet, now }) {
  const dateKey = toDateKey(date);
  const todayKey = toDateKey(now);
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  const tomorrowKey = toDateKey(tomorrow);

  const isToday = dateKey === todayKey;
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const dateLabel = `${DAY_NAMES[date.getDay()]} ${date.getDate()} ${MONTH_NAMES[date.getMonth()]}`;

  // Relative to today, whatever day of the week it is: today is "Today",
  // the next calendar day is "Tomorrow", everything beyond is day + date.
  let label = dateLabel;
  if (isToday) label = "Today";
  else if (dateKey === tomorrowKey) label = "Tomorrow";

  const am = [];
  const pm = [];
  for (const session of sessions) {
    const start = toMinutes(session.start);
    const end = toMinutes(session.end);
    for (let t = start; t + slotMinutes <= end; t += slotMinutes) {
      const startLabel = fromMinutes(t);
      const slot = {
        id: `${dateKey} ${startLabel}`,
        dateKey,
        dateLabel,
        startLabel,
        endLabel: fromMinutes(t + slotMinutes),
        booked: bookedSet.has(`${dateKey} ${startLabel}`),
        // Today's earlier slots are gone; treat them as unavailable.
        past: isToday && t <= nowMinutes,
      };
      (t < MIDDAY ? am : pm).push(slot);
    }
  }

  return {
    dateKey,
    label,
    dateLabel,
    // Sub-label avoids losing the date when the heading says Today/Tomorrow.
    subLabel: label === dateLabel ? null : dateLabel,
    periods: [
      { id: "am", label: "AM", slots: am },
      { id: "pm", label: "PM", slots: pm },
    ].filter((period) => period.slots.length > 0),
  };
}

function buildWeeks({ sessions, slotMinutes, booked, now }) {
  const bookedSet = new Set(booked);
  const { thisWeek, nextWeek } = buildDays(now);

  const build = (dates) =>
    dates.map((date) =>
      buildDay({ date, sessions, slotMinutes, bookedSet, now }),
    );

  return [
    { id: "this-week", label: "This Week", days: build(thisWeek) },
    { id: "next-week", label: "Next Week", days: build(nextWeek) },
  ].filter((week) => week.days.length > 0);
}

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Tell me your name.";
  if (!values.email.trim()) {
    errors.email = "I need an email address to send the invite.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "That doesn't look like an email address.";
  }
  if (!values.phone.trim()) {
    errors.phone = "I need a number to call you on.";
  } else if (!PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = "That doesn't look like a phone number.";
  }
  return errors;
}

export function BookingCalendar({
  formHeading,
  submitLabel,
  successHeading,
  successMessage,
  slotMinutes = 20,
  sessions = [],
  booked = [],
  endpoint = "",
  fallbackEmail,
}) {
  // Rendered only after mount so the dates are the visitor's "now", not the
  // build's. Avoids a hydration mismatch too.
  const [now, setNow] = useState(null);
  const [selected, setSelected] = useState(null);
  const [values, setValues] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | booked | error
  const formRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => setNow(new Date()), []);

  const weeks = useMemo(() => {
    if (!now) return [];
    return buildWeeks({ sessions, slotMinutes, booked, now });
  }, [now, sessions, slotMinutes, booked]);

  const setField = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const chooseSlot = (slot) => {
    if (slot.booked || slot.past) return;
    setSelected(slot);
    setStatus("idle");
    window.requestAnimationFrame(() => panelRef.current?.focus());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const found = validate(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      const first = ["name", "email", "phone"].find((f) => found[f]);
      formRef.current?.querySelector(`[name="${first}"]`)?.focus();
      return;
    }

    if (!endpoint) {
      const subject = `Discovery call — ${selected.dateKey} ${selected.startLabel}`;
      const body = [
        `Slot: ${selected.dateKey}, ${selected.startLabel} to ${selected.endLabel}`,
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone}`,
      ].join("\n");
      window.location.href = `mailto:${fallbackEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("booked");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(formRef.current),
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus("booked");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setSelected(null);
    setValues({ name: "", email: "", phone: "" });
    setErrors({});
    setStatus("idle");
  };

  if (status === "booked") {
    return (
      <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4 btn-light badge-alt">
        <div className="container">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="mb-5 text-h3 font-bold md:mb-6">{successHeading}</h2>
            <p className="mb-3 text-medium font-semibold">
              {selected?.dateLabel}, {selected?.startLabel} to{" "}
              {selected?.endLabel}
            </p>
            <p className="mb-8">{successMessage}</p>
            <Button variant="secondary" type="button" onClick={reset}>
              Book another slot
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4 btn-light badge-alt">
      <div className="container">
        {!now ? (
          <p className="text-medium">Loading available slots…</p>
        ) : (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_24rem] lg:gap-16">
            <div>
              <h2 className="mb-8 text-h3 font-bold md:mb-10">Choose a slot</h2>

              <div className="grid grid-cols-1 gap-12 md:gap-16">
                {weeks.map((week) => (
                  <div key={week.id}>
                    <h3 className="mb-6 text-h5 font-bold md:mb-8">
                      {week.label}
                    </h3>

                    {/* Days pair up on available width, not on a breakpoint:
                        AM/PM already splits each day in two, and at lg the
                        24rem booking panel takes its width out of this same
                        row — so no fixed breakpoint describes "wide enough for
                        two days". auto-fit keeps a day at 20rem minimum, which
                        is the width its two slot columns need. */}
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-8 md:gap-10">
                      {week.days.map((day) => {
                        const allGone = day.periods.every((period) =>
                          period.slots.every((s) => s.booked || s.past),
                        );
                        return (
                          <div key={day.dateKey}>
                            <h4 className="text-h6 font-bold">{day.label}</h4>
                            {day.subLabel && (
                              <p className="mb-4 text-small">{day.subLabel}</p>
                            )}
                            {!day.subLabel && <div className="mb-4" />}

                            {allGone ? (
                              <p className="text-small">
                                No slots left this day.
                              </p>
                            ) : (
                              // Below sm the day cards are already full width,
                              // so AM and PM stack: full-width slot buttons
                              // beat two cramped columns on a phone.
                              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {day.periods.map((period) => (
                                  <div key={period.id}>
                                    <p className="mb-2 text-small font-semibold">
                                      {period.label}
                                    </p>
                                    <ul className="grid grid-cols-1 gap-2">
                                      {period.slots.map((slot) => {
                                        const unavailable =
                                          slot.booked || slot.past;
                                        const isSelected =
                                          selected?.id === slot.id;
                                        return (
                                          <li
                                            key={slot.id}
                                            className="relative"
                                          >
                                            <button
                                              type="button"
                                              onClick={() => chooseSlot(slot)}
                                              // aria-disabled, not disabled: a
                                              // disabled button can't take focus,
                                              // and unavailable slots must be
                                              // focusable to reveal why.
                                              aria-disabled={
                                                unavailable || undefined
                                              }
                                              aria-pressed={
                                                isSelected || undefined
                                              }
                                              // The visible label uses an en
                                              // dash to stay inside the button
                                              // at tight widths; the accessible
                                              // name keeps the spoken wording.
                                              aria-label={`${day.label}, ${slot.startLabel} to ${slot.endLabel}`}
                                              className={`peer w-full rounded-form border-2 border-neutral-darkest px-2 py-2 text-center text-small whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-neutral-darkest focus-visible:ring-offset-2 focus-visible:outline-none ${
                                                unavailable
                                                  ? "cursor-not-allowed border-neutral-darkest/30 text-scheme-text/40"
                                                  : isSelected
                                                    ? "bg-neutral-darkest text-white"
                                                    : "hover:bg-neutral-darkest-5"
                                              }`}
                                            >
                                              {slot.startLabel}&ndash;
                                              {slot.endLabel}
                                            </button>
                                            {unavailable && (
                                              <>
                                                <span
                                                  aria-hidden="true"
                                                  className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-form bg-neutral-darkest text-small text-white opacity-0 transition-opacity duration-150 peer-hover:opacity-100 peer-focus:opacity-100"
                                                >
                                                  Unavailable
                                                </span>
                                                <span className="sr-only">
                                                  Unavailable
                                                </span>
                                              </>
                                            )}
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={panelRef}
              tabIndex={-1}
              aria-live="polite"
              className="h-fit border-2 border-scheme-border p-6 focus-visible:outline-none md:p-8 lg:sticky lg:top-8"
            >
              {!selected ? (
                <p>Pick a slot and I'll take a few details.</p>
              ) : (
                <>
                  <h2 className="mb-2 text-h5 font-bold">{formHeading}</h2>
                  <p className="mb-6 font-semibold">
                    {selected.dateLabel}, {selected.startLabel} to{" "}
                    {selected.endLabel}
                  </p>

                  <form ref={formRef} onSubmit={handleSubmit} noValidate>
                    <input type="hidden" name="slot" value={selected.id} />
                    <div className="grid grid-cols-1 gap-5">
                      <div>
                        <label
                          htmlFor="booking-name"
                          className="mb-2 block font-semibold"
                        >
                          Name
                        </label>
                        <input
                          id="booking-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          value={values.name}
                          onChange={setField("name")}
                          aria-invalid={errors.name ? "true" : undefined}
                          aria-describedby={
                            errors.name ? "booking-name-error" : undefined
                          }
                          className={FIELD_CLASSES}
                        />
                        {errors.name && (
                          <p
                            id="booking-name-error"
                            className="mt-2 text-small"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="booking-email"
                          className="mb-2 block font-semibold"
                        >
                          Email
                        </label>
                        <input
                          id="booking-email"
                          name="email"
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          spellCheck={false}
                          autoCapitalize="none"
                          required
                          placeholder="you@company.com"
                          value={values.email}
                          onChange={setField("email")}
                          aria-invalid={errors.email ? "true" : undefined}
                          aria-describedby={
                            errors.email ? "booking-email-error" : undefined
                          }
                          className={FIELD_CLASSES}
                        />
                        {errors.email && (
                          <p
                            id="booking-email-error"
                            className="mt-2 text-small"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="booking-phone"
                          className="mb-2 block font-semibold"
                        >
                          Phone
                        </label>
                        <input
                          id="booking-phone"
                          name="phone"
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          required
                          placeholder="07700 900123"
                          value={values.phone}
                          onChange={setField("phone")}
                          aria-invalid={errors.phone ? "true" : undefined}
                          aria-describedby={
                            errors.phone ? "booking-phone-error" : undefined
                          }
                          className={FIELD_CLASSES}
                        />
                        {errors.phone && (
                          <p
                            id="booking-phone-error"
                            className="mt-2 text-small"
                          >
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4">
                        <Button type="submit" disabled={status === "sending"}>
                          {status === "sending" ? "Booking…" : submitLabel}
                        </Button>
                        <button
                          type="button"
                          onClick={reset}
                          className="font-semibold underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-neutral-darkest focus-visible:ring-offset-2 focus-visible:outline-none"
                        >
                          Cancel
                        </button>
                      </div>

                      {status === "error" && (
                        <p className="text-small">
                          Something went wrong. Email me at {fallbackEmail} and
                          I'll book you in.
                        </p>
                      )}
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
