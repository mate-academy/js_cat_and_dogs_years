'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be an array', () => {
    const result = getHumanAge(100, 100);

    expect(result).toBeInstanceOf(Array);
  });

  test('should have right lenght', () => {
    const result = getHumanAge(100, 100);

    expect(result).toHaveLength(2);
  });

  test('should have expected values', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('should have expected values', () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test('should have expected values', () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test('should have expected values', () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  test('should have expected values', () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test('should have expected values', () => {
    const result = getHumanAge(27, 27);

    expect(result).toEqual([2, 2]);
  });

  test('should have expected values', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test('should have expected values', () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
