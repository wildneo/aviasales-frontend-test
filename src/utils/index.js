export const maxStops = (segments = []) => {
  const allStops = segments.map(({ stops }) => stops.length);

  return Math.max(...allStops);
};

export const getTotalDuration = (segments = []) => (
  segments.reduce((acc, { duration }) => (acc + duration), 0)
);

export const getTimeFromDate = (date, timeZone = 'UTC') => {
  const options = {
    timeZone, hour: 'numeric', minute: 'numeric'};

  return new Date(date).toLocaleTimeString('ru', options);
};

export const formatTimeInterval = (dateString, duration, timeZone) => {
  const startTime = Date.parse(dateString);
  const endTime = startTime + (60 * 1000 * duration);
  const formatedStartTime = getTimeFromDate(startTime, timeZone);
  const formatedEndTime = getTimeFromDate(endTime, timeZone);

  return `${formatedStartTime} — ${formatedEndTime}`;
};

export const formatDuration = (timeInMin = 0) => {
  const hh = Math.floor(timeInMin / 60);
  const mm = hh === 0 ? timeInMin : timeInMin - hh * 60;

  return `${hh}ч ${mm}м`;
};

export const formatPrice = (price = 0) => {
  const priceSep = price
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");

  return priceSep;
};

export const declinationHelper = (amount, textForms, zeroForm) => {
  const rem = amount % 100;
  const key = rem > 20 ? rem % 10 : rem;

  switch (true) {
    case key === 1:
      return `${amount} ${textForms[0]}`;

    case key >= 2 && key <= 4:
      return `${amount} ${textForms[1]}`;

    case key >= 5 && key <= 20:
      return `${amount} ${textForms[2]}`;

    case key === 0 && +amount !== 0:
      return `${amount} ${textForms[2]}`;

    default:
      return zeroForm
        ? `${zeroForm}`
        : `${amount} ${textForms[2]}`;
  }
};
