const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 6;
  } else if (day === "wednesday") {
    return 7.5;
  } else if (day === "thursday") {
    return 1;
  } else if (day === "friday") {
    return 10;
  } else if (day === "saturday") {
    return 8;
  } else if (day === "sunday") {
    return 8.5;
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
  console.log('Perfect');
} else if (actualSleepHours > idealSleepHours) {
  console.log('Sleep Less');
} else {
  console.log('Sleep More');
}
};

calculateSleepDebt()
