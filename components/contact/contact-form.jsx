"use client";

import React, { useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

// Shared with the Input primitive so the textarea and select match the inputs.
const FIELD_CLASSES =
  "w-full rounded-form border-2 border-neutral-darkest bg-transparent px-3 py-2 text-scheme-text transition-all duration-200 placeholder:text-neutral-darkest-60 hover:bg-neutral-darkest-5 focus-visible:ring-2 focus-visible:ring-neutral-darkest focus-visible:ring-offset-2 focus-visible:outline-none";

const EMPTY = { name: "", email: "", company: "", enquiry: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Tell me your name.";
  if (!values.email.trim()) {
    errors.email = "I need an email address to reply to.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "That doesn't look like an email address.";
  }
  if (!values.message.trim()) {
    errors.message = "Tell me what you're working on.";
  }
  return errors;
}

function buildMailto(email, values) {
  const subject = values.enquiry
    ? `${values.enquiry} — ${values.name}`
    : `Enquiry from ${values.name}`;
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.company && `Company: ${values.company}`,
    values.enquiry && `Enquiry: ${values.enquiry}`,
    "",
    values.message,
  ]
    .filter(Boolean)
    .join("\n");
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm({
  heading = "Send me a message",
  endpoint = "",
  fallbackEmail,
  enquiryTypes = [],
}) {
  const id = useId();
  const formRef = useRef(null);
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const setField = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    // Clear the error as soon as the person starts fixing it.
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const found = validate(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      const first = ["name", "email", "message"].find((f) => found[f]);
      formRef.current?.querySelector(`#${CSS.escape(`${id}-${first}`)}`)?.focus();
      return;
    }

    // No endpoint configured — hand off to the person's own mail client so the
    // form is never a dead end. See content/contact/index.mdx.
    if (!endpoint) {
      window.location.href = buildMailto(fallbackEmail, values);
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(formRef.current),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus("sent");
      setValues(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  const describedBy = (field) => (errors[field] ? `${id}-${field}-error` : undefined);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4 btn-light badge-alt">
      <div className="container">
        <div className="mx-auto w-full max-w-lg">
          <h2 className="mb-5 text-h3 font-bold md:mb-6">{heading}</h2>

          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 gap-5 md:gap-6">
              <div>
                <label htmlFor={`${id}-name`} className="mb-2 block font-semibold">
                  Name
                </label>
                <input
                  id={`${id}-name`}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={values.name}
                  onChange={setField("name")}
                  aria-invalid={errors.name ? "true" : undefined}
                  aria-describedby={describedBy("name")}
                  className={FIELD_CLASSES}
                />
                {errors.name && (
                  <p id={`${id}-name-error`} className="mt-2 text-small">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor={`${id}-email`} className="mb-2 block font-semibold">
                  Email
                </label>
                <input
                  id={`${id}-email`}
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
                  aria-describedby={describedBy("email")}
                  className={FIELD_CLASSES}
                />
                {errors.email && (
                  <p id={`${id}-email-error`} className="mt-2 text-small">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor={`${id}-company`} className="mb-2 block font-semibold">
                  Company <span className="font-normal">(optional)</span>
                </label>
                <input
                  id={`${id}-company`}
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={values.company}
                  onChange={setField("company")}
                  className={FIELD_CLASSES}
                />
              </div>

              {enquiryTypes.length > 0 && (
                <div>
                  <label htmlFor={`${id}-enquiry`} className="mb-2 block font-semibold">
                    What's this about? <span className="font-normal">(optional)</span>
                  </label>
                  <select
                    id={`${id}-enquiry`}
                    name="enquiry"
                    value={values.enquiry}
                    onChange={setField("enquiry")}
                    className={FIELD_CLASSES}
                  >
                    <option value="">Choose one…</option>
                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label htmlFor={`${id}-message`} className="mb-2 block font-semibold">
                  Message
                </label>
                <textarea
                  id={`${id}-message`}
                  name="message"
                  rows={6}
                  required
                  placeholder="What you're working on, and what's getting in the way…"
                  value={values.message}
                  onChange={setField("message")}
                  aria-invalid={errors.message ? "true" : undefined}
                  aria-describedby={describedBy("message")}
                  className={FIELD_CLASSES}
                />
                {errors.message && (
                  <p id={`${id}-message-error`} className="mt-2 text-small">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send message"}
                </Button>
                <p aria-live="polite" className="text-small">
                  {status === "sent" && "Thanks — I'll be in touch within two working days."}
                  {status === "error" &&
                    `Something went wrong. Email me directly at ${fallbackEmail}.`}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
