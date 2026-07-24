// "Add to calendar" without a service: Google takes a template URL, and
// everything else (Apple, Outlook desktop, Thunderbird) takes an .ics file we
// can build in the browser. Cal.com already emails the attendee an invite —
// these are the same event, offered in the moment rather than in their inbox.

const DEFAULT_TITLE = "Discovery call";

/** ICS wants UTC as YYYYMMDDTHHMMSSZ, with no punctuation. */
const toStamp = (value) =>
  new Date(value).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

/** Commas, semicolons and backslashes are field separators in ICS. */
const escapeText = (value) =>
  String(value)
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");

export function googleCalendarUrl({ title, start, end, details }) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title || DEFAULT_TITLE,
    dates: `${toStamp(start)}/${toStamp(end)}`,
    ...(details ? { details } : {}),
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

export function buildIcs({ title, start, end, details, uid }) {
  // Folding long lines is part of the spec, but every consumer we care about
  // copes without it and the fields here are short.
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//simonwynne.com//Discovery Call//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid || `${toStamp(start)}-simonwynne`}`,
    `DTSTAMP:${toStamp(new Date())}`,
    `DTSTART:${toStamp(start)}`,
    `DTEND:${toStamp(end)}`,
    `SUMMARY:${escapeText(title || DEFAULT_TITLE)}`,
    ...(details ? [`DESCRIPTION:${escapeText(details)}`] : []),
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

/** Hands the .ics to the browser as a download, then releases the blob URL. */
export function downloadIcs(event, filename = "discovery-call.ics") {
  const blob = new Blob([buildIcs(event)], {
    type: "text/calendar;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
