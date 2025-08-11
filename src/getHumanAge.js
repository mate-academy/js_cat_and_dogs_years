'use strict';

/**
 * @param {number} catAge
 * @param {number} dogAge
 *
 * @returns {number[]}
 */
function getHumanAge(catAge, dogAge) {
  validateAge(catAge);
  validateAge(dogAge);

  const catToHuman = convertToHuman(catAge, 15, 9, 4);
  const dogToHuman = convertToHuman(dogAge, 15, 9, 5);

  return [catToHuman, dogToHuman];
}

function validateAge(age) {
  if (typeof age !== 'number' || !Number.isFinite(age)) {
    throw new Error('Animal age should be a number');
  }

  if (age < 0) {
    throw new Error('Animal age cannot be negative');
  }
}

function convertToHuman(animalAge, first, second, other) {
  if (animalAge < first) {
    return 0;
  }

  if (animalAge < first + second) {
    return 1;
  }

  return 2 + Math.floor((animalAge - first - second) / other);
}

module.exports = { getHumanAge };
