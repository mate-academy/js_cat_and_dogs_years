'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0, if animalAge less than first', () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test(`should return 1,
      if animalAge less than (first + second) and more than first`, () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  test(`should return 2, if animalAge equal (first + second)`, () => {
    const result = getHumanAge(27, 27);

    expect(result).toEqual([2, 2]);
  });

  test(`should return correct value,
      if animalAge more than (first + second)`, () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test(`should return correct value, if one animalAge equal (first + second)
      and other animalAgemore first + second`, () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });
});
