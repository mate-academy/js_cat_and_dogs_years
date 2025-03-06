'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(1, 1))
      .toBeInstanceOf(Array);
  });

  test('should return an array with two elements', () => {
    expect(getHumanAge(1, 1))
      .toHaveLength(2);
  });

  test(`should return [0, 0] when catAge is 14 and dogAge is 14,`, () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test(`should return [1, 1] when catAge is 23 and dogAge is 23`, () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  test(`should return [2, 2] when catAge is 24 and dogAge is 24`, () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test(`should return [3, 2] when catAge is 28 and dogAge is 28`, () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });


  test(`should return [21, 17] when catAge is 100 and dogAge is 100`, () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });


  test(`should return [0, 0] when catAge is 0 and dogAge is 0`, () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });


  test(`should return [3, 3] when catAge is 28 and dogAge is 29`, () => {
    const result = getHumanAge(28, 29);

    expect(result).toEqual([3, 3]);
  });
});
