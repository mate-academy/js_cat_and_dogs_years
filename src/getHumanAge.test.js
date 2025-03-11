'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] for catAge and dogAge 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] for catAge and dogAge 14 (before 15)', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for catAge and dogAge 15 (first 15 years)', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(
    'should return [1, 1] for catAge and dogAge 23 (between 15 and 24)'
    , () => {
      expect(getHumanAge(23, 23)).toEqual([1, 1]);
    });

  test(
    'should return [2, 2] for catAge and dogAge 24 (next years after 15)',
    () => {
      expect(getHumanAge(24, 24)).toEqual([2, 2]);
    });

  test(
    'should return [2, 2] for catAge and dogAge 27 (between 24 and 29)',
    () => {
      expect(getHumanAge(27, 27)).toEqual([2, 2]);
    });

  test(
    'should return [3, 2] for catAge and dogAge 28 (more than 24 for cat)',
    () => {
      expect(getHumanAge(28, 28)).toEqual([3, 2]);
    });

  test('should return [21, 17] for catAge and dogAge 100 (large value)', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
