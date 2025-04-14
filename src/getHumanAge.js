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

function convertToHuman(animalAge, firstBracket, secondBracket, other) {
  if (animalAge < firstBracket) {
    return 0;
  }

  if (animalAge < firstBracket + secondBracket) {
    return 1;
  }

  return 2 + Math.floor((animalAge - firstBracket - secondBracket) / other);
}

module.exports = { getHumanAge };
