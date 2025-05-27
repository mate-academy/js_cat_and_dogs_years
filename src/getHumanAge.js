'use strict';

/*
getHumanAge(0, 0) === [0, 0]
getHumanAge(14, 14) === [0, 0]
getHumanAge(15, 15) === [1, 1]
getHumanAge(23, 23) === [1, 1]
getHumanAge(24, 24) === [2, 2]
getHumanAge(27, 27) === [2, 2]
getHumanAge(28, 28) === [3, 2]
getHumanAge(100, 100) === [21, 17]
*/
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

function convertToHuman(animalAge, first, second, other) {
  if (animalAge < first) {
    return 0;
  }

  if (animalAge < first + second) {
    return 1;
  }

  if (animalAge === first + second) {
    return 2;
  }

  return 2 + Math.floor((animalAge - first - second) / other);
}

module.exports = { getHumanAge };
