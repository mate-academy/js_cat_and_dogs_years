'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return correct human ages for given cat and dog ages', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(1, 1)).toEqual([0, 0]);
    expect(getHumanAge(5, 5)).toEqual([0, 0]);
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(20, 20)).toEqual([1, 1]);
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
    expect(getHumanAge(30, 30)).toEqual([3, 3]);
  });
});
