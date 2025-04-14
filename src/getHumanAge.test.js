'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared as a function', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for both ages being 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] for ages less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for ages equal to 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] for ages between 15 and 24', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for ages equal to 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] for ages between 24 and 28', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return [3, 2] for ages equal to 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should handle large values correctly', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should calculate cat years independently from dog years', () => {
    expect(getHumanAge(15, 0)).toEqual([1, 0]);
    expect(getHumanAge(0, 15)).toEqual([0, 1]);
  });

  test('should work for non-edge cases', () => {
    expect(getHumanAge(30, 35)).toEqual([3, 4]);
  });
});
