'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('14 cats and 14 dogs years should give result [0,0]', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('15 cats years and 15 dogs years should give result [1,1]', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('23 cat and dog years should give result [2,2]', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('24 cat and dog years should give result [2,2]', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('28 cat and dog years should give result [3,2]', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('100 cat and dog years should give result [21,17]', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });

   test('36 cat and 34 dog years should give result [36,34]', () => {
    expect(getHumanAge(36, 34))
      .toEqual([5, 4]);
  });

  test('0 cat and dog years should give result [0,0], when ages are less 15', () => {
    expect(getHumanAge(10, 10))
      .toEqual([0, 0]);
  });

    test('should handle very large ages', () => {
    expect(getHumanAge(500, 500))
      .toEqual([123, 98]);
  });
});
