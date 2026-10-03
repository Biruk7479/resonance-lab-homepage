// Dates in the content are calendar days in Addis Ababa (UTC+3, no DST).
const TIME_ZONE = "Africa/Addis_Ababa";

const dayFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: TIME_ZONE,
});

function atNoon(isoDate: string): Date {
  return new Date(`${isoDate}T12:00:00+03:00`);
}

/** "28 July 2025", or "12–18 August 2025" for a range. */
export function formatDay(start: string, end?: string): string {
  return end ? dayFormat.formatRange(atNoon(start), atNoon(end)) : dayFormat.format(atNoon(start));
}

/** A call stays open until the end of its closing day, Addis Ababa time. */
export function isOpen(closesOn: string, now: Date = new Date()): boolean {
  return now.getTime() <= new Date(`${closesOn}T23:59:59+03:00`).getTime();
}
