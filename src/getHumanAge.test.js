'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('Should retutn zeros f both catAge and dogAge are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('Should return zeros if both carAge and dogAge are less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('Should return [1, 1] if both are 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('Should return [1, 1] if both are less than 24 but >= 15', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('Should return [2, 2] if both are 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('Should return [3, 2] if catAge and dogAge is 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('Should return [21, 17] for large values of catAge and dogAge', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
