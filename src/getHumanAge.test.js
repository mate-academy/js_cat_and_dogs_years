'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return an array`, () => {
    expect(getHumanAge())
      .toBeInstanceOf(Array);
  });

  test(`should return [0, 0] when input is (0, 0)`, () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`should return [0, 0] when input is (14, 14)`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test(`should return [1, 1] when input is (15, 15)`, () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test(`should return [1, 1] when input is (23, 23)`, () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test(`should return [2, 2] when input is (24, 24)`, () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test(`should return [2, 2] when input is (24, 24)`, () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test(`should return [3, 2] when input is (28, 28)`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test(`should return [3, 3] when input is (29, 29)`, () => {
    expect(getHumanAge(29, 29))
      .toEqual([3, 3]);
  });

  test(`should return [21, 17] when input is (100, 100)`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });

  test(`should return empty array when both input is negative numbers`, () => {
    expect(getHumanAge(-15, -2))
      .toEqual([0, 0]);
  });

  test(`should return empty array when both input is string`, () => {
    expect(getHumanAge('asd', 'sdas'))
      .toEqual([NaN, NaN]);
  });
});
