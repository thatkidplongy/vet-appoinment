export function convertToUTC(appointment: {
  date: Date | string;
  time: Date | string;
}) {
  const { date, time } = appointment;
  const dateTimeString = `${date} ${time}`;
  const localDateTime = new Date(dateTimeString);
  const utcDateTime = localDateTime.toUTCString();

  return utcDateTime;
}

export function convertToUTCAndAddOneHour(appointment: {
  date: string;
  time: string;
}) {
  const { date, time } = appointment;
  const dateTimeString = `${date} ${time}`;
  const localDateTime = new Date(dateTimeString);

  // Add one hour to the time
  const oneHourLater = new Date(localDateTime.getTime() + 60 * 60 * 1000);
  const utcDateTimeWithOneHourLater = oneHourLater.toISOString();

  return utcDateTimeWithOneHourLater;
}

export function getStartHour() {
  return new Date(new Date().setHours(new Date().getHours() - 5));
}
