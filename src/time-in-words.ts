const divideTime = (time: string) =>
  time.split(':');

const belowTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const convertMinutes = (minutes: string | number): string => {
  const number = typeof minutes === 'string' ? parseInt(minutes, 10) : minutes;
  if (number < 20) {
    return belowTwenty[number];
  }

  if (number === 20) {
    return 'twenty';
  }
  if (number < 30) {
    const index = number - 20;
    return `twenty ${belowTwenty[index]}`;
  }
  if (number === 30) {
    return 'half';
  }
  if (number > 30) {
    const subtractedNumber = 60 - number;
    return convertMinutes(subtractedNumber);
  }
  return 'error';
};

const checkMinutes = (minutes: string): string => {
  const minutesNum = parseInt(minutes, 10);
  if (minutesNum === 0) return "o' clock";
  return minutesNum > 30 ? 'to' : 'past';
};

const getTimeText = (time: string): string => {
  const [hour, minutes] = divideTime(time);

  const hourNumber = typeof hour === 'string' ? parseInt(hour, 10) : hour;
  const hourResult = belowTwenty[hourNumber];

  const minutesResult = checkMinutes(minutes);
  if (minutesResult === "o' clock") {
    return `${hourResult} ${minutesResult}`;
  }

  const convertedMinutes = convertMinutes(minutes);

  if (minutesResult === 'to') {
    const hourAfterOneHour = belowTwenty[hourNumber + 1];
    if (convertedMinutes === 'half' || convertedMinutes === 'quarter') {
      return `${convertedMinutes} ${minutesResult} ${hourAfterOneHour}`;
    }
    return `${convertedMinutes} ${convertedMinutes === 'one' ? 'minute' : 'minutes'} ${minutesResult} ${hourAfterOneHour}`;
  }

  if (convertedMinutes === 'half' || convertedMinutes === 'quarter') {
    return `${convertedMinutes} ${minutesResult} ${hourResult}`;
  }
  return `${convertedMinutes} ${convertedMinutes === 'one' ? 'minute' : 'minutes'} ${minutesResult} ${hourResult}`;
};

export {
  divideTime, belowTwenty, convertMinutes, checkMinutes, getTimeText,
};
