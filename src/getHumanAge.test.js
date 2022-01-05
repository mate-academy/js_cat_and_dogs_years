'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(2, 2))
      .toBeInstanceOf(Array);
  });

  test('should return [0, 0] when cat age = 0, dog age = 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test(`should return [0, 0] when cat age = 14, dog age = 14`, () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return [1, 1] when cat age = 15, dog age = 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return [1, 1] when cat age = 16, dog age = 16', () => {
    expect(getHumanAge(16, 16))
      .toEqual([1, 1]);
  });

  test('should return [1, 1] when cat age = 23, dog age = 23', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return [2, 2] when cat age = 24, dog age = 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return [2, 2] when cat age = 25, dog age = 25', () => {
    expect(getHumanAge(25, 25))
      .toEqual([2, 2]);
  });

  test('should return [2, 2] when cat age = 27, dog age = 28', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should return [3, 3] when cat age = 28, dog age = 29', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test(`should return [21, 17] when cat age = 100, dog age = 100`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });

  test(`should return [NaN, 0] when cat age = string, dog age = 0`, () => {
    expect(getHumanAge('string', 0))
      .toEqual([NaN, 0]);
  });

  test(`should return [NaN, NaN] when cat age & dog age is empty`, () => {
    expect(getHumanAge())
      .toEqual([NaN, NaN]);
  });

  test(`should return [0, 2] when cat age = negative , dog age = 25`, () => {
    expect(getHumanAge(-30, 25))
      .toEqual([0, 2]);
  });

  test(`should return [1, 1] when cat age = 23.4, dog age = 23.4`, () => {
    expect(getHumanAge(23.4, 23.4))
      .toEqual([1, 1]);
  });
});
