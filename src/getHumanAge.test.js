'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 humanYear when animals age 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 0 humanYear when animals age <= 14', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return 1 humanYear when animals age > 14 and <= 23', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1 humanYear when animals age > 14 and <= 23', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 humanYear when animals age >= 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2 humanYear when animals age >= 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2 humanYear when animals age >= 24 and <= 27', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('Every 4 years, after 24, catsYears give 1 extra humanYear', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('Every 5 years, after 24, dogsYears give 1 extra humanTear', () => {
    expect(getHumanAge(29, 29))
      .toEqual([3, 3]);
  });
});
