'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 for both if pet age is 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('returns 0 if age hasn’t reached the first threshold', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('returns 1 when pet is exactly 15 years old', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('still returns 1 if pet age is under 24', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('returns 2 when age hits 24 exactly', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('returns 2 even if age slightly exceeds 24', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('gives 3 for cat and 2 for dog when both are 28', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('returns 3 for both if pet age is 29', () => {
    expect(getHumanAge(29, 29))
      .toEqual([3, 3]);
  });

  test('converts age 100 to 21 for cats and 17 for dogs', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
