// Narrows Cal's slots down to the windows actually on offer, evaluated in the
// host's own timezone so a window means the same wall-clock time all year:
// "10:00 Europe/London" is 10:00 whether that maps to GMT in winter or BST in
// summer. Cal's schedule can be wider (it currently runs 09:00–17:00); this is
// what the page chooses to surface from within it.
//
// Slots keep their absolute instants, so filtering by host-local time works no
// matter which timezone the visitor is viewing from.

const FORMATTERS = new Map();
function hostParts(iso, timeZone) {
  let fmt = FORMATTERS.get(timeZone);
  if (!fmt) {
    fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    FORMATTERS.set(timeZone, fmt);
  }
  const parts = fmt.formatToParts(new Date(iso));
  const get = (type) => parts.find((p) => p.type === type)?.value;
  let hour = parseInt(get("hour"), 10);
  if (hour === 24) hour = 0; // some engines emit 24 for midnight
  return { weekday: get("weekday"), minutes: hour * 60 + parseInt(get("minute"), 10) };
}

// "10:00" → 600. A bare number is treated as already-minutes: YAML 1.1 reads an
// unquoted 10:00 as base-60 (= 600), which happens to be the same value, but we
// never want to depend on that — quote the times in the content file.
const toMinutes = (value) => {
  if (typeof value === "number") return value;
  const [h, m] = String(value).split(":").map(Number);
  return h * 60 + (m || 0);
};

const WEEKEND = new Set(["Sat", "Sun"]);

/**
 * @param slotsByDate Cal's { "YYYY-MM-DD": [{ start, end }] } map.
 * @param options.timeZone     zone the windows are expressed in.
 * @param options.windows      [{ start: "10:00", end: "11:00" }, …]; empty = no
 *                             time restriction.
 * @param options.weekdaysOnly drop Saturday and Sunday (host-local).
 */
export function filterAvailability(
  slotsByDate,
  { timeZone = "Europe/London", windows = [], weekdaysOnly = true } = {},
) {
  const ranges = windows.map((w) => ({
    start: toMinutes(w.start),
    end: toMinutes(w.end),
  }));

  const out = {};
  for (const [date, entries] of Object.entries(slotsByDate || {})) {
    const kept = entries.filter((entry) => {
      const startAt = hostParts(entry.start, timeZone);
      if (weekdaysOnly && WEEKEND.has(startAt.weekday)) return false;
      if (ranges.length === 0) return true;

      // A slot must sit fully inside a window. The windows here are mid-day, so
      // the end never wraps past midnight and a plain compare is safe.
      const endMinutes = entry.end
        ? hostParts(entry.end, timeZone).minutes
        : startAt.minutes + 1;
      return ranges.some(
        (r) => startAt.minutes >= r.start && endMinutes <= r.end,
      );
    });
    if (kept.length) out[date] = kept;
  }
  return out;
}
