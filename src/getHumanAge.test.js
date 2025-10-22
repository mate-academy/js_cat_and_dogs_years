/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] when both catAge and dogAge are 0', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('should return 0 when catAge and dogAge are < 15', () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test('should return [0, 0] when both catAge and dogAge are negative', () => {
    const result = getHumanAge(-1, -1);

    expect(result).toEqual([0, 0]);
  });

  test('should correctly calculate cat’s human age when only catAge is non-zero', () => {
    const result = getHumanAge(16, 0);

    expect(result).toEqual([1, 0]);
  });

  test('should correctly calculate dog’s human age when only dogAge is non-zero', () => {
    const result = getHumanAge(0, 16);

    expect(result).toEqual([0, 1]);
  });

  test('should return [1, 1] when both are exactly 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [2, 2] when both are exactly 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should increase only cat age at 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should increase dog age at 29', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should return [1, 1] when both are 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] when both are 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return [21, 17] when both are 100 years', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should always return integers (no fractions)', () => {
    const result = getHumanAge(123, 87);

    expect(Number.isInteger(result[0])).toBe(true);
    expect(Number.isInteger(result[1])).toBe(true);
  });

  test('should always return an array of length 2', () => {
    const result = getHumanAge(50, 50);

    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(2);
  });

  test('should not mutate input parameters', () => {
    const catAge = 28;
    const dogAge = 28;

    getHumanAge(catAge, dogAge);
    expect(catAge).toBe(28);
    expect(dogAge).toBe(28);
  });

  test('should work correctly for very large numbers (e.g. catAge = 200, dogAge = 200)', () => {
    expect(getHumanAge(200, 200)).toEqual([46, 37]);
  });
});
