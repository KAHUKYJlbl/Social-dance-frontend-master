export function grammarHelper(count: number) {
  const ruleExceptions = [11, 12, 13, 14];
  if (ruleExceptions.includes(count)) return 'мероприятий';

  const lastDigit = Number(count.toString().slice(-1));

  if (lastDigit === 1) return 'мероприятие';
  if ([0, 5, 6, 7, 8, 9].includes(lastDigit)) return 'мероприятий';
  if ([2, 3, 4].includes(lastDigit)) return 'мероприятия';
}
