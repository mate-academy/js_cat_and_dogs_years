'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return array', () => {
    const result = getHumanAge();

    expect(Array.isArray(result)).toBe(true);
  });

  test('should contain 2 elements', () => {
    const result = getHumanAge(4, 17);

    expect(result).toHaveLength(2);
  });

  test('should return zeros if both parameters are 0', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('should return a whole number of years', () => {
    const result = getHumanAge(14, 23);

    expect(result).toEqual([0, 1]);
  });

  test('should work properly for big numbers', () => {
    const result = getHumanAge(200, 300);

    expect(result).toEqual([46, 57]);
  });

  test('should return different values for the same parameters', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });
});
