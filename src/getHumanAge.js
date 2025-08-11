'use strict';

/**
 * @param {number} catAge
 * @param {number} dogAge
 *
 * @returns {number[]}
 */

const catFirstYear = 15;
const catSecondYear = 9;
const catAdditionalYears = 4;
const dogFirstYear = 15;
const dogSecondYear = 9;
const dogAdditionalYears = 5;

function getHumanAge(catAge, dogAge) {
  const catToHuman = convertToHuman(
    catAge,
    catFirstYear,
    catSecondYear,
    catAdditionalYears
  );
  const dogToHuman = convertToHuman(
    dogAge,
    dogFirstYear,
    dogSecondYear,
    dogAdditionalYears
  );

  return [catToHuman, dogToHuman];
}

function convertToHuman(
  animalAge,
  firstYear,
  secondYear,
  additionalYearsPerUnit
) {
  if (animalAge < firstYear) {
    return 0;
  }

  if (animalAge < firstYear + secondYear) {
    return 1;
  }

  return (
    2
    + Math.floor((animalAge - firstYear - secondYear) / additionalYearsPerUnit)
  );
}

module.exports = { getHumanAge };
