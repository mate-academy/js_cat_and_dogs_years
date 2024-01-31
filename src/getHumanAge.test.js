'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return correct human age when cat\'s and dog\'s '
  + 'ages are less than the first threshold', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  test('should return correct human age when cat\'s and dog\'s '
  + 'ages are in the second threshold', () => {
    expect(getHumanAge(20, 16)).toEqual([1, 1]);
  });

  test('should return correct human age when cat\'s age is the '
  + 'and dog\'s ages are in the different thresholds', () => {
    expect(getHumanAge(24, 23)).toEqual([2, 1]);
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(0, 16)).toEqual([0, 1]);
  });

  test('should return correct human age when cat\'s and dog\'s '
  + 'ages are in the third threshold', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
    expect(getHumanAge(30, 30)).toEqual([3, 3]);
  });

  test('should return correct human age when cat\'s and dog\'s '
  + 'ages are more than third threshold', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return correct human age when cat\'s and dog\'s '
  + 'ages are negative', () => {
    expect(getHumanAge(-1, -1)).toEqual([0, 0]);
  });

  test('should return correct human age when cat\'s and dog\'s '
  + 'ages are floating numbers', () => {
    expect(getHumanAge(8.5, 16.5)).toEqual([0, 1]);
  });
});
