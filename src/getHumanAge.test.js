'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be return 0 if catAge or dogAge is equal 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should be return 0 if catAge or dogAge is equal 14', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should be return 1 if catAge or dogAge is equal 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should be return 1 if catAge or dogAge is equal 23', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should be return 2 if catAge or dogAge is equal 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should be return 2 if catAge or dogAge is equal 27', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should be return 3 if catAge is equal 28 and 2 if dogAge is equal 28', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should be return 21 if catAge is equal 100 and 17 if dogAge is equal 100', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
