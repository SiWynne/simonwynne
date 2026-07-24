"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { createBooking, fetchSlots, visitorTimeZone } from "./cal-api";
import { downloadIcs, googleCalendarUrl } from "./calendar-links";
import { filterAvailability } from "./availability";

// AVAILABILITY
// Cal.com owns the calendar. Availability is read live from its public API on
// every page view and the booking is written straight back, so a slot stops
// being offered the moment someone takes it — there is no local list to keep in
// step and no window in which two people can book the same time. Cal also does
// the timezone conversion: slots are requested in the visitor's own zone and
// rendered exactly as returned.

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
const timeLabel = (iso) => {
  const date = new Date(iso);
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

/**
 * The two Mondays that anchor the "This Week" / "Next Week" split, and the end
 * of the horizon. Used both to bound the request and to group the results.
 *
 * The week rolls over at midnight on Saturday, not Monday: Monday–Friday,
 * "This Week" is the current calendar week; once Saturday begins — after the
 * week's slots are spent — it rolls forward so the coming Monday–Friday become
 * "This Week". So on a Saturday or Sunday there is no stale, empty current
 * week; the upcoming week is shown instead.
 */
function weekBoundaries(now) {
  const dow = now.getDay(); // 0 Sun … 6 Sat
  let offsetToMonday;
  if (dow === 0) offsetToMonday = 1; // Sunday → tomorrow's Monday
  else if (dow === 6) offsetToMonday = 2; // Saturday → Monday
  else offsetToMonday = 1 - dow; // Mon–Fri → this week's Monday

  const thisWeekMonday = new Date(now);
  thisWeekMonday.setDate(now.getDate() + offsetToMonday);
  thisWeekMonday.setHours(0, 0, 0, 0);

  const nextWeekMonday = new Date(thisWeekMonday);
  nextWeekMonday.setDate(thisWeekMonday.getDate() + 7);

  const horizonEnd = new Date(thisWeekMonday);
  horizonEnd.setDate(thisWeekMonday.getDate() + 14);

  return { thisWeekMonday, nextWeekMonday, horizonEnd };
}

/** Cal's { "YYYY-MM-DD": [{ start, end }] } into the shape the markup wants. */
function buildWeeks(slotsByDate, now) {
  const { nextWeekMonday, horizonEnd } = weekBoundaries(now);
  const nextWeekMondayKey = toDateKey(nextWeekMonday);
  // Cal treats the request's end date as inclusive, so the Monday that opens
  // the week beyond the horizon can slip in. Bound the groups to drop it.
  const horizonEndKey = toDateKey(horizonEnd);

  const todayKey = toDateKey(now);
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  const tomorrowKey = toDateKey(tomorrow);

  const days = Object.keys(slotsByDate)
    .sort()
    .map((dateKey) => {
      const entries = slotsByDate[dateKey] || [];
      if (entries.length === 0) return null;

      // Parse from the slot itself rather than the key, so the day heading can
      // never disagree with the times printed under it.
      const date = new Date(entries[0].start);
      const dateLabel = `${DAY_NAMES[date.getDay()]} ${date.getDate()} ${MONTH_NAMES[date.getMonth()]}`;
      let label = dateLabel;
      if (dateKey === todayKey) label = "Today";
      else if (dateKey === tomorrowKey) label = "Tomorrow";

      const am = [];
      const pm = [];
      for (const entry of entries) {
        const start = new Date(entry.start);
        const slot = {
          id: `${dateKey}T${entry.start}`,
          start: entry.start,
          end: entry.end || null,
          dateKey,
          dateLabel,
          startLabel: timeLabel(entry.start),
          endLabel: entry.end ? timeLabel(entry.end) : null,
        };
        (start.getHours() < 12 ? am : pm).push(slot);
      }

      return {
        dateKey,
        label,
        dateLabel,
        // Sub-label avoids losing the date when the heading says Today.
        subLabel: label === dateLabel ? null : dateLabel,
        periods: [
          { id: "am", label: "AM", slots: am },
          { id: "pm", label: "PM", slots: pm },
        ].filter((period) => period.slots.length > 0),
      };
    })
    .filter(Boolean);

  return [
    {
      id: "this-week",
      label: "This Week",
      days: days.filter((day) => day.dateKey < nextWeekMondayKey),
    },
    {
      id: "next-week",
      label: "Next Week",
      days: days.filter(
        (day) =>
          day.dateKey >= nextWeekMondayKey && day.dateKey < horizonEndKey,
      ),
    },
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
  calUsername,
  calEventSlug,
  availability,
  fallbackEmail,
}) {
  const [weeks, setWeeks] = useState([]);
  // loading | ready | unavailable
  const [loadState, setLoadState] = useState("loading");
  const [timeZone, setTimeZone] = useState(null);
  const [selected, setSelected] = useState(null);
  const [values, setValues] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | booked | error
  const [booking, setBooking] = useState(null);
  const [failure, setFailure] = useState(null);
  const formRef = useRef(null);
  const panelRef = useRef(null);

  // Runs after mount, so "now" is the visitor's clock rather than the build's.
  const load = useCallback(async () => {
    setLoadState("loading");
    const now = new Date();
    const zone = visitorTimeZone();
    setTimeZone(zone);

    if (!calUsername || !calEventSlug) {
      setFailure("This booking page isn't connected to a calendar yet.");
      setLoadState("unavailable");
      return;
    }

    try {
      const slots = await fetchSlots({
        username: calUsername,
        eventSlug: calEventSlug,
        start: now,
        end: weekBoundaries(now).horizonEnd,
        timeZone: zone,
      });
      // The fetch window already limits this to the rest of this week and next;
      // the filter trims each day to the offered windows and weekdays.
      setWeeks(buildWeeks(filterAvailability(slots, availability), now));
      setLoadState("ready");
    } catch (error) {
      setFailure(error.message);
      setLoadState("unavailable");
    }
  }, [calUsername, calEventSlug, availability]);

  useEffect(() => {
    load();
  }, [load]);

  const setField = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const chooseSlot = (slot) => {
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

    setStatus("sending");
    try {
      // Cal is authoritative on the confirmed times — keep what it returns
      // rather than what was on screen, and use it for the calendar links.
      setBooking(
        await createBooking({
          username: calUsername,
          eventSlug: calEventSlug,
          start: selected.start,
          timeZone,
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
        }),
      );
      setStatus("booked");
    } catch (error) {
      setFailure(error.message);
      setStatus("error");
    }
  };

  const reset = () => {
    setSelected(null);
    setValues({ name: "", email: "", phone: "" });
    setErrors({});
    setStatus("idle");
    setBooking(null);
    setFailure(null);
  };

  // Someone else may have taken a slot while this page sat open, so a fresh
  // booking always refetches rather than trusting what is on screen.
  const bookAnother = () => {
    reset();
    load();
  };

  if (status === "booked") {
    const calendarEvent = {
      title: booking?.title || "Discovery call — Simon Wynne",
      start: booking?.start || selected?.start,
      end: booking?.end || selected?.end,
      uid: booking?.uid,
      details: "Twenty minutes to talk through what you're working on.",
    };
    const canAddToCalendar = Boolean(calendarEvent.start && calendarEvent.end);

    return (
      <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4 btn-light badge-alt">
        <div className="container">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="mb-5 text-h3 font-bold md:mb-6">{successHeading}</h2>
            <p className="mb-3 text-medium font-semibold">
              {selected?.dateLabel}, {selected?.startLabel}
              {selected?.endLabel ? ` to ${selected.endLabel}` : ""}
            </p>
            <p className="mb-8">{successMessage}</p>

            {canAddToCalendar && (
              <div className="mb-8">
                <p className="mb-3 font-semibold">Add it to your calendar</p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={googleCalendarUrl(calendarEvent)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-form border-2 border-neutral-darkest px-4 py-2 font-semibold transition-all duration-200 hover:bg-neutral-darkest-5 focus-visible:ring-2 focus-visible:ring-neutral-darkest focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    Google Calendar
                  </a>
                  <button
                    type="button"
                    onClick={() => downloadIcs(calendarEvent)}
                    className="rounded-form border-2 border-neutral-darkest px-4 py-2 font-semibold transition-all duration-200 hover:bg-neutral-darkest-5 focus-visible:ring-2 focus-visible:ring-neutral-darkest focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    Apple or Outlook (.ics)
                  </button>
                </div>
              </div>
            )}

            <Button variant="secondary" type="button" onClick={bookAnother}>
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
        {loadState === "loading" ? (
          <p className="text-medium">Loading available slots…</p>
        ) : loadState === "unavailable" || weeks.length === 0 ? (
          <div className="w-full max-w-lg">
            <h2 className="mb-5 text-h3 font-bold md:mb-6">
              {loadState === "unavailable"
                ? "I can't load my calendar right now"
                : "No slots free in the next two weeks"}
            </h2>
            <p className="mb-8">
              Email me at{" "}
              <a
                href={`mailto:${fallbackEmail}`}
                className="font-semibold underline underline-offset-4"
              >
                {fallbackEmail}
              </a>{" "}
              and I'll find you a time.
            </p>
            <Button variant="secondary" type="button" onClick={load}>
              Try again
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_24rem] lg:gap-16">
            <div>
              <h2 className="mb-2 text-h3 font-bold">Choose a slot</h2>
              {timeZone && (
                <p className="mb-8 text-small md:mb-10">
                  Times shown in your timezone ({timeZone.replace(/_/g, " ")}).
                </p>
              )}

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
                      {week.days.map((day) => (
                        <div key={day.dateKey}>
                          <h4 className="text-h6 font-bold">{day.label}</h4>
                          {day.subLabel ? (
                            <p className="mb-4 text-small">{day.subLabel}</p>
                          ) : (
                            <div className="mb-4" />
                          )}

                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {day.periods.map((period) => (
                              <div key={period.id}>
                                <p className="mb-2 text-small font-semibold">
                                  {period.label}
                                </p>
                                <ul className="grid grid-cols-1 gap-2">
                                  {period.slots.map((slot) => {
                                    const isSelected = selected?.id === slot.id;
                                    return (
                                      <li key={slot.id}>
                                        <button
                                          type="button"
                                          onClick={() => chooseSlot(slot)}
                                          aria-pressed={isSelected || undefined}
                                          // The visible label uses an en dash
                                          // to stay inside the button at tight
                                          // widths; the accessible name keeps
                                          // the spoken wording.
                                          aria-label={`${day.label}, ${slot.startLabel}${slot.endLabel ? ` to ${slot.endLabel}` : ""}`}
                                          className={`w-full rounded-form border-2 border-neutral-darkest px-2 py-2 text-center text-small whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-neutral-darkest focus-visible:ring-offset-2 focus-visible:outline-none ${
                                            isSelected
                                              ? "bg-neutral-darkest text-white"
                                              : "hover:bg-neutral-darkest-5"
                                          }`}
                                        >
                                          {slot.startLabel}
                                          {slot.endLabel && (
                                            <>&ndash;{slot.endLabel}</>
                                          )}
                                        </button>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
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
                    {selected.dateLabel}, {selected.startLabel}
                    {selected.endLabel ? ` to ${selected.endLabel}` : ""}
                  </p>

                  <form ref={formRef} onSubmit={handleSubmit} noValidate>
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
                          That slot didn't go through
                          {failure ? ` (${failure})` : ""}. It may have just
                          been taken — pick another, or email me at{" "}
                          {fallbackEmail}.
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
