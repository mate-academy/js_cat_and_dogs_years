'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
  test('should return 0, 0 if catAge and dogAge < 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return 1, 1 if catAge and dogAge = 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1, 1 if catAge and dogAge = 23', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return 2, 2 if catAge and dogAge = 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2, 2 if catAge 27 and dogAge 27', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return 3, 3 if catAge 28 and dogAge 28', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 3]);
  });

  test('should return 4, 4 if catAge 35 and dogAge 35', () => {
    expect(getHumanAge(35, 35))
      .toEqual([5, 5]);
  });

  test('should return 0, 0 if catAge 0 and dogAge 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 100, 100 if catAge 21 and dogAge 17', () => {
    expect(getHumanAge(21, 17))
      .toEqual([100, 100]);
  });

});
