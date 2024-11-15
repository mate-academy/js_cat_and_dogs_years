'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should have right length', () => {
    const result = getHumanAge(2, 3);

    expect(result).toHaveLength(2);
  });

  test('should return an Array', () => {
    const result = getHumanAge;

    expect(Array.isArray(result));
  });

  test('should have expected values', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('should have expected values bv1', () => {
    const result = getHumanAge(5, 5);

    expect(result).toEqual([0, 0]);
  });

  test('should have expected values bv1', () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test('should have expected values bv1', () => {
    const result = getHumanAge(16, 16);

    expect(result).toEqual([1, 1]);
  });

  test('should have expected values bv1', () => {
    const result = getHumanAge(24, 25);

    expect(result).toEqual([2, 2]);
  });

  test('should have expected values bv1', () => {
    const result = getHumanAge(29, 30);

    expect(result).toEqual([3, 3]);
  });
});
