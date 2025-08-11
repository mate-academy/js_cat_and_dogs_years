'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return zero values if input is equal to  0`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should return zero values if imput less than 15`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 values if imput is equal to  15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 1 values if imput less than 24', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 2 values if imput imput is equal to  24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 2 values if imput less than 28', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return the values 3, 2 when the input value is 28, 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return the values 6, 5 when the input value is 40, 40', () => {
    expect(getHumanAge(40, 40)).toEqual([6, 5]);
  });
});
