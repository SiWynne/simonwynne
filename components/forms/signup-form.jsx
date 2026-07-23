"use client";

import React, { useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

// Matches the Input primitive so text, select and textarea all sit together.
const FIELD_CLASSES =
  "w-full rounded-form border-2 border-neutral-darkest bg-transparent px-3 py-2 text-scheme-text transition-all duration-200 placeholder:text-neutral-darkest-60 hover:bg-neutral-darkest-5 focus-visible:ring-2 focus-visible:ring-neutral-darkest focus-visible:ring-offset-2 focus-visible:outline-none";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function initialValues(fields) {
  return Object.fromEntries(
    fields.map((field) => [
      field.name,
      field.type === "checkbox"
        ? Boolean(field.defaultChecked)
        : field.type === "select"
          ? field.options?.[0] || ""
          : "",
    ]),
  );
}

function validate(fields, values) {
  const errors = {};
  for (const field of fields) {
    if (field.type === "checkbox" || field.type === "select") continue;
    const value = String(values[field.name] || "").trim();
    if (field.required && !value) {
      errors[field.name] = `${field.label} is required.`;
    } else if (field.type === "email" && value && !EMAIL_PATTERN.test(value)) {
      errors[field.name] = "That doesn't look like an email address.";
    }
  }
  return errors;
}

function buildMailto(email, title, fields, values) {
  const body = fields
    .map((field) => {
      const value = values[field.name];
      if (field.type === "checkbox") return `${field.label}: ${value ? "Yes" : "No"}`;
      return value ? `${field.label}: ${value}` : null;
    })
    .filter(Boolean)
    .join("\n");
  return `mailto:${email}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
}

export function SignupForm({
  title,
  heading,
  submitLabel,
  successMessage,
  endpoint = "",
  fallbackEmail,
  fields = [],
}) {
  const id = useId();
  const formRef = useRef(null);
  const [values, setValues] = useState(() => initialValues(fields));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const fieldId = (name) => `${id}-${name}`;

  const setField = (field) => (event) => {
    const value =
      field.type === "checkbox" ? event.target.checked : event.target.value;
    setValues((prev) => ({ ...prev, [field.name]: value }));
    setErrors((prev) =>
      prev[field.name] ? { ...prev, [field.name]: undefined } : prev,
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const found = validate(fields, values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      const first = fields.find((field) => found[field.name]);
      formRef.current
        ?.querySelector(`#${CSS.escape(fieldId(first.name))}`)
        ?.focus();
      return;
    }

    if (!endpoint) {
      window.location.href = buildMailto(fallbackEmail, title, fields, values);
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
      setValues(initialValues(fields));
    } catch {
      setStatus("error");
    }
  };

  const renderField = (field) => {
    const controlId = fieldId(field.name);
    const errorId = `${controlId}-error`;
    const error = errors[field.name];

    if (field.type === "checkbox") {
      return (
        <div key={field.name}>
          {/* Label wraps the control so the whole row is one hit target. */}
          <label htmlFor={controlId} className="flex items-start gap-3">
            <input
              id={controlId}
              name={field.name}
              type="checkbox"
              checked={values[field.name]}
              onChange={setField(field)}
              className="mt-1 size-5 shrink-0 rounded-form border-2 border-neutral-darkest focus-visible:ring-2 focus-visible:ring-neutral-darkest focus-visible:ring-offset-2 focus-visible:outline-none"
            />
            <span>{field.label}</span>
          </label>
        </div>
      );
    }

    return (
      <div key={field.name}>
        <label htmlFor={controlId} className="mb-2 block font-semibold">
          {field.label}
          {field.optional && <span className="font-normal"> (optional)</span>}
        </label>

        {field.type === "select" ? (
          <select
            id={controlId}
            name={field.name}
            value={values[field.name]}
            onChange={setField(field)}
            className={FIELD_CLASSES}
          >
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={controlId}
            name={field.name}
            type={field.type || "text"}
            inputMode={field.type === "email" ? "email" : undefined}
            autoComplete={field.autocomplete}
            spellCheck={field.type === "email" ? false : undefined}
            autoCapitalize={field.type === "email" ? "none" : undefined}
            required={field.required}
            placeholder={field.placeholder}
            value={values[field.name]}
            onChange={setField(field)}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={error ? errorId : undefined}
            className={FIELD_CLASSES}
          />
        )}

        {error && (
          <p id={errorId} className="mt-2 text-small">
            {error}
          </p>
        )}
      </div>
    );
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4 btn-light badge-alt">
      <div className="container">
        <div className="mx-auto w-full max-w-lg">
          <h2 className="mb-5 text-h3 font-bold md:mb-6">{heading}</h2>

          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 gap-5 md:gap-6">
              {fields.map(renderField)}

              <div className="flex flex-wrap items-center gap-4">
                <Button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : submitLabel}
                </Button>
                <p aria-live="polite" className="text-small">
                  {status === "sent" && successMessage}
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
