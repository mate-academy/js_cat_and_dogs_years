'use strict';

/**
 * @param {number} catAge
 * @param {number} dogAge
 *
 * @returns {number[]}
 */
function getHumanAge(catAge, dogAge) {
  const catToHuman = convertToHuman(catAge, 15, 9, 4);
  const dogToHuman = convertToHuman(dogAge, 15, 9, 5);

  return [catToHuman, dogToHuman];
}

function convertToHuman(animalAge, firstAge, secondAge, otherAge) {
  if (animalAge < firstAge) {
    return 0;
  }

  if (animalAge < firstAge + secondAge) {
    return 1;
  }

  return 2 + Math.floor((animalAge - firstAge - secondAge) / otherAge);
}

module.exports = { getHumanAge };
