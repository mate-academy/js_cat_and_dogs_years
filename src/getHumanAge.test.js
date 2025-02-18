'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if animalAge < 15', () => {
    const res = getHumanAge(14, 14);

    expect(res).toEqual([0, 0]);
  });

  test('should return 1 if animalAge is exactly 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 1 if animalAge < 24', () => {
    expect(getHumanAge(22, 23)).toEqual([1, 1]);
  });

  test('should return expected values for large numbers', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should have expected values with rouded values', () => {
    expect(getHumanAge(75, 75)).toEqual([14, 12]);
  });
});
