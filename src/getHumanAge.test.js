'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return array', () => {
    const result = getHumanAge(1, 1);

    expect(result).toBeInstanceOf(Array);
  });

  test('should work if input is 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('both returned values should be numbers', () => {
    const result = getHumanAge(10, 10);

    expect(typeof result[0]).toBe('number');
  });

  test('both returned values should be numbers', () => {
    const result = getHumanAge(10, 10);

    expect(typeof result[1]).toBe('number');
  });

  test('should work with huge amounts', () => {
    expect(getHumanAge(9999, 29999)).toEqual([2495, 5997]);
  });

  test('should return NaN if value was not provided', () => {
    const result = getHumanAge(1);

    expect(result[1]).toBeNaN();
  });

  test('should return 0 if value is negative', () => {
    const result = getHumanAge(10, -10);

    expect(result[1]).toBe(0);
  });
});
