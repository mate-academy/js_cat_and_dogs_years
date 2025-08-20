'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('Should return 0 for 0 cat and dog years', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('Should return 1 for 15 cat and dog years', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('Should return 2 for 24 cat and dog years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('Should return 3 for 28 years cat and 2 for 28 dog years', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('Should return 21 for 100 cat years and 17 for 100 dog years', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
