'use strict';

/**
 * @param {number} catAge
 * @param {number} dogAge
 *
 * @returns {number[]}
 */
function getHumanAge(catAge, dogAge) {
  const catToHuman = catAge < 15
    ? 0
    : catAge < 24
      ? 1
      : 2 + Math.floor((catAge - 24) / 4);
  const dogToHuman = dogAge < 15
    ? 0
    : dogAge < 24
      ? 1
      : 2 + Math.floor((dogAge - 24) / 5);

  return [catToHuman, dogToHuman];
}

module.exports = getHumanAge;
