'use strict';

/**
 * @param {number} catAge
 * @param {number} dogAge
 *
 * @returns {number[]}
 */
function getHumanAge(catAge, dogAge) {
  const catHumanYears = catAge < 15
    ? 0
    : catAge < 24
      ? 1
      : 2 + Math.floor((catAge - 24) / 4);
  const dogHumanYears = dogAge < 15
    ? 0
    : dogAge < 24
      ? 1
      : 2 + Math.floor((dogAge - 24) / 5);
  return [catHumanYears, dogHumanYears];
}
module.exports = getHumanAge;