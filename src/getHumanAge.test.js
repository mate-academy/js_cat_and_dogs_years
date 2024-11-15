'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return array`, () => {
    expect(getHumanAge(0, 0))
      .toBeInstanceOf(Array);
  });

  test(`should return [0, 0] when both values are less than 14)`, () => {
    expect(getHumanAge(14, 14))
      .toBeInstanceOf([0, 0]);
  });

  test(`should return [0, 0] when both values are 0)`, () => {
    expect(getHumanAge(0, 0))
      .toBeInstanceOf([0, 0]);
  });

  test(`should return [1, 1] when both values are 15)`, () => {
    expect(getHumanAge(15, 15))
      .toBeInstanceOf([1, 1]);
  });

  test(`should return [1, 1]] when both values are less 24`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test(`should return [2, 2]] when both values are 24`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`should return [2, 2] when both values are less 28`, () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test(`should return [3, 3] when both values are 28`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test(`should return [3, 3] when catAge is 28 and dogAge is 29`, () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test(`should return [21, 17] when both values are 100`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
