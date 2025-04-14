'use strict';

const CATS_YEARS_MAP = [15, 9, 4];
const DOGS_YEARS_MAP = [15, 9, 5];

/**
 * @param {number} catAge
 * @param {number} dogAge
 *
 * @returns {number[]}
 */
function getHumanAge(catAge, dogAge) {
  const catToHuman = convertToHuman(catAge, CATS_YEARS_MAP);
  const dogToHuman = convertToHuman(dogAge, DOGS_YEARS_MAP);

  return [catToHuman, dogToHuman];
}

function convertToHuman(animalAge, yearsMap) {
  const maximumsMap = [];

  let humanYearsIdx;
  let humanYears;

  for (let i = 0; i < yearsMap.length; i++) {
    maximumsMap[i] = (maximumsMap[i - 1] || 0) + yearsMap[i];

    if (maximumsMap[i] > animalAge) {
      humanYearsIdx = i;
      break;
    }

    if (i === yearsMap.length - 1) {
      humanYearsIdx = i + 1;
    }
  }

  if (humanYearsIdx < yearsMap.length) {
    humanYears = humanYearsIdx;
  } else {
    const lastMaximum = maximumsMap[humanYearsIdx - 1];
    const lastHumanCoefficient = yearsMap[humanYearsIdx - 1];

    humanYears = yearsMap.length + Math.floor(
      (animalAge - lastMaximum) / lastHumanCoefficient
    );
  }

  return humanYears;
}

module.exports = {
  getHumanAge,
  CATS_YEARS_MAP,
  DOGS_YEARS_MAP,
};
