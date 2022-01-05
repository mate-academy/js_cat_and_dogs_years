'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zero if cat age and dog age < 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return 1 if cat age and dog age = 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1 if cat age and dog age = 23', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 if cat age and dog age = 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 3 if cat age = 27 and dog age = 29', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return [21, 17] if cat age and dog age = 100 ', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
