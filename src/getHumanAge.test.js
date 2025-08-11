'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('if catAge and dogAge = 0, should return [0, 0]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('if catAge and dogAge < 15, should return [0, 0]', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('if catAge and dogAge < 24, should return [1, 1]', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('if catAge and dogAge < 28, should return [2, 2]', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('if catAge and dogAge = 28, should return [3, 2]', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('if catAge and dogAge = 29, should return [3, 3]', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('if catAge and dogAge = 32, should return [4, 3]', () => {
    expect(getHumanAge(32, 32)).toEqual([4, 3]);
  });
});
