'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return 0 in case animal is younger than 15', () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  test('should return 1 in case animal is older than 15', () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test('should return 0 in case animals` age is 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return 0 in case animals` age is 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 in case animals` age is 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 1 in case animals` age is 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 2 in case animals` age is 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 2 in case animals` age is 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return 3 and 2 in case animals` age is 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return 21 and 17 in case animals` age is 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
