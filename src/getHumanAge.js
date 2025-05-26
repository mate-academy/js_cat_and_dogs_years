'use strict';

/**
 * @param {number} catAge
 * @param {number} dogAge
 *
 * @returns {number[]}
 */
function getHumanAge(catAge, dogAge) {
  // eslint-disable-next-line max-len
  return [
    convertAnimalAge(catAge, 15, 9, 4),
    convertAnimalAge(dogAge, 15, 9, 5),
  ];
}

function convertAnimalAge(age, first, second, additional) {
  if (age < first) {
    return 0;
  }

  if (age < first + second) {
    return 1;
  }

  return 2 + Math.floor((age - first - second) / additional);
}

module.exports = { getHumanAge };
