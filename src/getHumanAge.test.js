'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return correct values', () => {
    expect(getHumanAge(9, 16)).toEqual([0, 1]);
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(24, 20)).toEqual([2, 1]);
    expect(getHumanAge(25, 30)).toEqual([2, 3]);
    expect(getHumanAge(30, 40)).toEqual([3, 5]);
  });
});
