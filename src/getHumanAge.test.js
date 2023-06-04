'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return values for zero inputs', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return values 0 for inputs 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return values 1 for inputs 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return values 1 for inputs 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return values 2 for inputs 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return values 2 for inputs 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return values 3 and 2 for inputs 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return values 21 and 17 for inputs 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
