'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should convert ages that are less then 1', () => {
    expect(getHumanAge(7, 7)).toEqual([0, 0]);
  });

  test('should convert ages that are equal to 1', () => {
    expect(getHumanAge(19, 19)).toEqual([1, 1]);
  });

  test('should convert ages that are equal to 2', () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  test('should convert ages that are equal to 15', () => {
    expect(getHumanAge(77, 93)).toEqual([15, 15]);
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
