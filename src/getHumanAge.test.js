'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should return correct age', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return correct age', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return correct age', () => {
    expect(getHumanAge(32, 39)).toEqual([4, 5]);
  });

  test('should return correct age if rounding needed', () => {
    expect(getHumanAge(29, 32)).toEqual([3, 3]);
  });

  test('should return correct age if age equals zero', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return correct age if animal age is < 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return correct age if animal age is 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return an array', () => {
    expect(getHumanAge(18, 20)).toBeInstanceOf(Array);
  });

  test('should return an array with 2 elements', () => {
    expect(getHumanAge(17, 5)).toHaveLength(2);
  });

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });
});
