import { DateTime } from "luxon";

const dateIsoToUtc = (date: string) => {
  return DateTime.fromISO(date, { zone: "local" }).toUTC().toISO();
};

export { dateIsoToUtc };
