export const normalizeDate = (
  date: Array<string | null>,
  time: Array<string | null>,
  day: string,
): string => {
  const isDateRange = date[0] && date[1];

  const dateFormat = isDateRange ? `${date[0].split(' ')[0]} - ${date[1]}` : date[0];

  const timeFormat = isDateRange ? '' : `, ${time[0]} - ${time[1]}`;
  const weekDay = isDateRange ? '' : `, ${day}`;

  return `${dateFormat}${weekDay}${timeFormat}`;
};
