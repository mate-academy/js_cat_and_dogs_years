'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return correct human age for given dog age', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(30, 30)).toEqual([3, 3]);
  });

  test('should return 0 for non-positive dog age', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(-5, -5)).toEqual([0, 0]);
  });
});
