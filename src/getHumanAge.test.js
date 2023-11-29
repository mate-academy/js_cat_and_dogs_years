'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(
    `should return 0 for cat and dog when they are less than 15 years old`,
    () => {
      const result = getHumanAge(0, 0);

      expect(result).toEqual([0, 0]);
    });

  test(`should return 0 for cat and dog when they are 14 years old`, () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test(`should return 1 for cat and dog when they are 15 years old`, () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test(`should return 1 for cat and dog when they are 23 years old`, () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  test(`should return 1 for cat and dog when they are 24 years old`, () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test(`should return 2 for cat and dog when they are 27 years old`, () => {
    const result = getHumanAge(27, 27);

    expect(result).toEqual([2, 2]);
  });

  test(
    `should return 3 for cat and
    should return 2 for dog when they're 28 years old`,
    () => {
      const result = getHumanAge(28, 28);

      expect(result).toEqual([3, 2]);
    });

  test(
    `should return 21 for cat and
    should return 17 for dog when they're 100 years old`,
    () => {
      const result = getHumanAge(100, 100);

      expect(result).toEqual([21, 17]);
    });
});
