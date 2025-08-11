function getHumanAge(catAge, dogAge) {
  const catHumanYears = calculateHumanYears(catAge, [15, 9, 4]);
  const dogHumanYears = calculateHumanYears(dogAge, [15, 9, 5]);
  return [catHumanYears, dogHumanYears];
}

function calculateHumanYears(age, thresholds) {
  if (age < thresholds[0]) return 0;
  if (age < thresholds[0] + thresholds[1]) return 1;
  const remainingYears = age - (thresholds[0] + thresholds[1]);
  const extraYears = Math.floor(remainingYears / thresholds[2]);
  return 2 + extraYears;
}

module.exports = getHumanAge;
