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

describe('getHumanAge', () => {
  test('should return 0 for both if ages are too small', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 if age is between first and second year', () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
    expect(getHumanAge(20, 20)).toEqual([1, 1]);
  });

  test('should calculate correct human age for adult cats and dogs', () => {
    // 15 + 9 = 24 → starting from 25, extra years count
    expect(getHumanAge(25, 25)).toEqual([
      2 + Math.floor((25 - 15 - 9) / 4), // cat
      2 + Math.floor((25 - 15 - 9) / 5), // dog
    ]);
  });

  test('should handle exact thresholds', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);

    expect(getHumanAge(26, 26)).toEqual([
      2 + Math.floor((26 - 15 - 9) / 4),
      2 + Math.floor((26 - 15 - 9) / 5),
    ]);
  });

  test('should work with large ages', () => {
    expect(getHumanAge(40, 40)).toEqual([
      2 + Math.floor((40 - 24) / 4),
      2 + Math.floor((40 - 24) / 5),
      // Updated threshold logic: works correctly for <, not <=

    ]);
  });
});
