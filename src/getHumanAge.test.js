'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] for age [0, 0]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] when both ages are less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] when both are exactly 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] for ages between 15 and 23', () => {
    expect(getHumanAge(17, 20)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for exactly 24 years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [3, 2] when cat reaches 28 and dog stays at 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should correctly convert long ages [100, 100]', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should correctly round down to whole number of human years', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
    expect(getHumanAge(32, 30)).toEqual([4, 3]);
    expect(getHumanAge(36, 34)).toEqual([5, 4]);
  });
});
