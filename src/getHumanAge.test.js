'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zeros if both ages are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return zeros if ages are less then 15', () => {
    expect(getHumanAge(8, 13)).toEqual([0, 0]);
  });

  test('should return 1 if both ages are 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 1 if both ages are 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 2 if both ages are 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 2 for cat and 3 for dog if both ages are 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return 3 if both ages are 29', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('should add 1 for every 4 cat years and 1 for every 5 dog years', () => {
    expect(getHumanAge(36, 58)).toEqual([5, 8]);
  });
});
