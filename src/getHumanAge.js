"use strict";

/**
 * Converts cat and dog years to human years.
 *
 * @param {number} catAge - The cat's age in cat years.
 * @param {number} dogAge - The dog's age in dog years.
 * @returns {number[]} - An array where the first element is
 * the cat's age in human years,
 * and the second element is the dog's age in human years.
 */
function getHumanAge(catAge, dogAge) {
  const catToHuman = convertToHuman(catAge, 15, 9, 4);
  const dogToHuman = convertToHuman(dogAge, 15, 9, 5);

  return [catToHuman, dogToHuman];
}

/**
 * Converts animal age to human years.
 *
 * @param {number} animalAge - The animal's age in years.
 * @param {number} first - The first threshold in animal years.
 * @param {number} second - The second threshold in animal years.
 * @param {number} other - The additional years after the second threshold.
 * @returns {number} - The age in human years.
 */
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
