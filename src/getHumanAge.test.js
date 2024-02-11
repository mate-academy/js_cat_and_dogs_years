'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] if both parameters are 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return [0, 0] for cat ad dog are less then 15y.o.', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return [1, 1] if both parameters are above 15y.o', () => {
    expect(getHumanAge(16, 16))
      .toEqual([1, 1]);
  });

  test('should return [2, 2] if both parameters are above 24y.o', () => {
    expect(getHumanAge(25, 25))
      .toEqual([2, 2]);
  });

  test('should work with higher parameters', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
