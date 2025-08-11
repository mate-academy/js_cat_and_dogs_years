'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should convert first 15 years correctly for both cat and dog', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(10, 12)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should convert ages in second range (15-24 years)', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should convert ages beyond 24 years correctly', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
    expect(getHumanAge(32, 34)).toEqual([4, 4]);
    expect(getHumanAge(36, 39)).toEqual([5, 5]);
  });

  test('should handle zero and small ages', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(1, 1)).toEqual([0, 0]);
    expect(getHumanAge(5, 5)).toEqual([0, 0]);
  });

  test('should handle different ages for cat and dog', () => {
    expect(getHumanAge(15, 24)).toEqual([1, 2]);
    expect(getHumanAge(24, 15)).toEqual([2, 1]);
    expect(getHumanAge(28, 34)).toEqual([3, 4]);
  });
});
