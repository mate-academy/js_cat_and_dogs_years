'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return 1 year for first 15 years of cat and dog', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 1 more year for the next 9 years of cat and dog', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 1 more year for every 4 next years of cat', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return 1 more year for every 5 next years of dog', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });
});
