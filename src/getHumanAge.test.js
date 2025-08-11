'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for age 0 for both cat and dog', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] for ages less than 15 (cat and dog)', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for 15 years for both cat and dog', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] for 23 years for both cat and dog ', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for 24 years for both cat and dog ', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] for cat age 27 and dog age 27 ', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return [3, 2] for cat age 28 and dog age 28 ', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [21, 17] for large ages (e.g., 100 years)', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should handle cat ages just above 15 correctly', () => {
    expect(getHumanAge(16, 0)).toEqual([1, 0]);
    expect(getHumanAge(17, 0)).toEqual([1, 0]);
    expect(getHumanAge(18, 0)).toEqual([1, 0]);
  });

  test('should handle dog ages just above 15 correctly', () => {
    expect(getHumanAge(0, 16)).toEqual([0, 1]);
    expect(getHumanAge(0, 17)).toEqual([0, 1]);
    expect(getHumanAge(0, 18)).toEqual([0, 1]);
  });

  test('should handle cat age 14 and dog age 14 correctly', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should handle ages at the threshold', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return human age as 0 if cat age is between 0 and 15', () => {
    expect(getHumanAge(1, 0)).toEqual([0, 0]);
    expect(getHumanAge(10, 5)).toEqual([0, 0]); // both too young
  });

  test('should return correct conversion for higher values', () => {
    expect(getHumanAge(100, 200)).toEqual([21, 37]);
    expect(getHumanAge(120, 200)).toEqual([26, 37]);
  });
});
