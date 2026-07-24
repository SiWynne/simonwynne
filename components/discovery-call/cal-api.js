// Cal.com API v2, called straight from the visitor's browser.
//
// Both endpoints used here are public: reading availability and creating a
// booking need no API key, and api.cal.com answers with
// `access-control-allow-origin: *`. That is what lets a static export talk to
// Cal directly — there is no server in this project to hold a secret, and
// nothing secret ends up in the bundle.
//
// Cal versions each endpoint separately, so the two pin different dates.

const CAL_API = "https://api.cal.com/v2";
const SLOTS_VERSION = "2024-09-04";
const BOOKINGS_VERSION = "2026-02-25";

/** The visitor's own zone. Cal does the conversion; we just say who we are. */
export function visitorTimeZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  } catch {
    return "UTC";
  }
}

function messageFrom(payload, response) {
  return (
    payload?.error?.message ||
    payload?.message ||
    `Cal.com returned ${response.status}`
  );
}

/**
 * Available slots between two Dates, as a map of "YYYY-MM-DD" to
 * [{ start, end }] ISO strings offset into `timeZone`.
 *
 * Cal only returns what is genuinely bookable — past slots, booked slots and
 * anything inside the event's minimum notice are already filtered out, so
 * there is no local notion of "booked" or "past" to keep in step.
 */
export async function fetchSlots({
  username,
  eventSlug,
  start,
  end,
  timeZone,
}) {
  const params = new URLSearchParams({
    username,
    eventTypeSlug: eventSlug,
    start: start.toISOString(),
    end: end.toISOString(),
    timeZone,
    format: "range",
  });

  const response = await fetch(`${CAL_API}/slots?${params}`, {
    headers: { "cal-api-version": SLOTS_VERSION },
  });
  const payload = await response.json().catch(() => null);

  if (!response.ok || payload?.status !== "success") {
    throw new Error(messageFrom(payload, response));
  }
  return payload.data || {};
}

/**
 * Book a slot. `start` is the ISO string Cal gave us for that slot, passed
 * back untouched so there is no chance of drifting off the grid.
 *
 * Cal holds the calendar, so this is the point the slot actually becomes
 * unavailable to everyone else — which is the whole reason for the rewrite.
 */
export async function createBooking({
  username,
  eventSlug,
  start,
  timeZone,
  name,
  email,
  phone,
}) {
  const response = await fetch(`${CAL_API}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cal-api-version": BOOKINGS_VERSION,
    },
    body: JSON.stringify({
      start,
      username,
      eventTypeSlug: eventSlug,
      attendee: {
        name,
        email,
        timeZone,
        language: "en",
        // Lands on the attendee record. If the event type collects phone as a
        // booking field instead, this moves to bookingFieldsResponses.
        ...(phone ? { phoneNumber: phone } : {}),
      },
    }),
  });
  const payload = await response.json().catch(() => null);

  if (!response.ok || payload?.status !== "success") {
    throw new Error(messageFrom(payload, response));
  }
  return payload.data;
}
