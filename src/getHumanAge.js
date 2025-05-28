'use strict';

/**
 * @param {number} catAge
 * @param {number} dogAges
 *
 * @returns {number[]}
 */
function getHumanAge(catAge, dogAges) {
  const catToHuman = convertToHuman(catAge, 15, 9, 4);
  const dogToHuman = convertToHuman(dogAges, 15, 9, 5);

  return [catToHuman, dogToHuman];
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
