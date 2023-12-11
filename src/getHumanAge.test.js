'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return 0 if animals ages are < 15', () => {
    expect(getHumanAge(0, 14)).toStrictEqual([0, 0]);
  });

  test("should return 1 if animal's age is > 15 and < 24", () => {
    expect(getHumanAge(23, 15)).toStrictEqual([1, 1]);
  });

  test(`should return 2 if cat's age is >= 24
    and < 28 and should return 2 if dog's age if >= 24 and < 29`, () => {
    expect(getHumanAge(27, 28)).toStrictEqual([2, 2]);
  });

  test(`should return 3 if cat's age is > 28 and dog's age is > 29`, () => {
    expect(getHumanAge(28, 29)).toStrictEqual([3, 3]);
  });

  test(`should add 1 extra human year
  for every 4 cat years after 24 cat years`, () => {
    expect(getHumanAge(34, 29)).toStrictEqual([4, 3]);
  });

  test(`should add 1 extra human year
  for every 5 dog years after 24 dog years`, () => {
    expect(getHumanAge(28, 39)).toStrictEqual([3, 5]);
  });

  test('should be return 0 if catAge or dogAge is equal 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should be return a right value for first 14 cat & dog age', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should be return a right value for first 15 cat & dog age', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should be return a right value for first 24 cat & dog age', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should be return a right value for first 28 cat & dog age', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should be return a right value for dogAge & catAge', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
