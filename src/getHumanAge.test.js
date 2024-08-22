'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 for ages less than 15 for cats and dogs', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 for ages less than 24 for cats and dogs', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return integers', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should correctly convert dogs and cats years older than 23', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });
});
