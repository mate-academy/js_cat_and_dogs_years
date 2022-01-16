'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('function should return [0,0] if catAge = 0, dogAge = 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('function should return [0,0] if catAge = 14, dogAge = 14', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('fucntion should return [1,1] if catAge = 15, dogAge = 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('fucntion should return [1,1] if catAge = 19, dogAge = 19', () => {
    expect(getHumanAge(19, 19))
      .toEqual([1, 1]);
  });

  test('function should return [2,2] if catAge = 24, dogAge = 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('fucntion should return [2,2] if catAge = 24, dogAge = 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('fucntion should return [3,2] if catAge = 28, dogAge = 28', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('fucntion should return [3,3] if catAge = 29, dogAge = 29', () => {
    expect(getHumanAge(29, 29))
      .toEqual([3, 3]);
  });

  test('fucntion should return [11,9] if catAge = 60, dogAge = 60', () => {
    expect(getHumanAge(60, 60))
      .toEqual([11, 9]);
  });
});
