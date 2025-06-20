'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zeroes if both ages are zero', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return zeroes if both ages are less then 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return ones if both ages are 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return ones if both ages more then 15', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return twos if both ages are 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return twos if both ages are more then 24', () => {
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  test('should return threes if both age are 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return threes if both age are 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return threes if both ages are 29', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('should return threes if ages more than 29', () => {
    expect(getHumanAge(30, 31)).toEqual([3, 3]);
  });

  test('should return 21 and 17 if both ages are 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return NaN if parameter is not a number', () => {
    expect(getHumanAge(100, 'string')).toEqual([21, NaN]);
  });
});
