export const getTimeFromDate = (date, timeZone = 'UTC') => {
  const options = {
    timeZone,
    hour: 'numeric',
    minute: 'numeric',
  };

  return new Date(date).toLocaleTimeString('ru', options);
};

export const formatTime = (dateString, duration) => {
  const timeZone = 'Europe/Moscow';
  const startTime = Date.parse(dateString);
  const endTime = startTime + (60 * 1000 *duration);
  console.log(startTime, endTime);
  
  return `${getTimeFromDate(startTime, timeZone)} — ${getTimeFromDate(endTime, timeZone)}`;
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

export const declinationHelper = (stops) => {
  const amount = stops.length;
  const rem = amount % 100;
  const key = rem > 20 ? rem % 10 : rem;

  switch (true) {
    case key === 1:
      return `${amount} пересадка`;
  
    case key >= 2 && key <= 4:
      return `${amount} пересадки`;
  
    case key >= 5 && key <= 20:
      return `${amount} пересадок`;
  
    default:
      return 'Без пересадок';
  }
};