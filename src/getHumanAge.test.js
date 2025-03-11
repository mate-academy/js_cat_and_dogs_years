'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    const result = getHumanAge();

    expect(result).toBeInstanceOf(Array);
  });

  test('should return [3, 2], when input is (28, 28)', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test('should return 0, when input is empty', () => {
    const result = getHumanAge(null, null);

    expect(result).toEqual([0, 0]);
  });

  test('should return 0, when input contains 0', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('should accept first two input values', () => {
    const result = getHumanAge(25, 30, 20, 16);

    expect(result).toEqual([2, 3]);
  });

  test('should return 0, if input contains negative values', () => {
    const result = getHumanAge(-20, -25);

    expect(result).toEqual([0, 0]);
  });

  test('should round input values', () => {
    const result = getHumanAge(29.5, 16.5);

    expect(result).toEqual([3, 1]);
  });
});
