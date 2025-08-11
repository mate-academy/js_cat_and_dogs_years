'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be a function', () => {
    expect(typeof getHumanAge).toBe('function');
  });

  test('should return [0, 0] for 0 years', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] for just below first threshold', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for exactly 15 years', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] for just below second threshold', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for exactly second threshold', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] for age not yet earning extra', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return [3, 2] when cat earns 1 extra year', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [4, 3] for (32, 29)', () => {
    expect(getHumanAge(32, 29)).toEqual([4, 3]);
  });

  test('should return [21, 17] for 100 years', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should handle decimal ages correctly (floor rounding)', () => {
    expect(getHumanAge(36.9, 34.4)).toEqual([5, 4]);
  });

  test('should throw error for negative ages', () => {
    expect(() => getHumanAge(-1, -5)).toThrow('Animal age cannot be negative');
  });

  test('should throw error for non-number input', () => {
    expect(() =>
      getHumanAge('cat', 5)
    ).toThrow('Animal age should be a number');
    expect(() => getHumanAge(5, null)).toThrow('Animal age should be a number');
  });
});
