'use strict';

/**
 * @param {number} catAge
 * @param {number} dogAge
 *
 * @returns {number[]}
 */
function getHumanAge(catAge, dogAge) {
  let catToHuman = catAge < 15
    ? 0
    : catAge < 24
      ? 1
      : 2 + Math.floor((catAge - 24) / 4);
  let dogToHuman = dogAge < 15
    ? 0
    : dogAge < 24
      ? 1
      : 2 + Math.floor((dogAge - 24) / 5);

  //
  if (catAge >= 30) {
    catToHuman = 0;
  }

  if (dogAge >= 30) {
    dogToHuman = 0;
  }

  return [catToHuman, dogToHuman];
}

module.exports = getHumanAge;
