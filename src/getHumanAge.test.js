'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 human years if any Cat or Dogs year is 0 ', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 1 and 1 human ages for cat 14 and dog 14 years ', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return 1 and 1 human ages for cat 15 and dog 16 years ', () => {
    expect(getHumanAge(15, 16))
      .toEqual([1, 1]);
  });

  test('should return 1 and 1 human ages for cat 23 and dog 23 years ', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 and 2 human ages for cat 24 and dog 24 years ', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2 and 2 human ages for cat 27 and dog 27 years', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return 3 and 2 human ages for cat 28 and dog 28 years', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return 21 & 17 human ages for cat 100 and dog 100 years', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
