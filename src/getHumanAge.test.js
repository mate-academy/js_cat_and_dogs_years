'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zero twice if ages are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return zero twice if ages are 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 twice if ages are 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 1 twice if ages are 16', () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test('should return 1 twice if ages are 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 2 twice if ages are 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 2 twice if ages are 25', () => {
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  test('should return 2 twice if ages are 27 and 28', () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  test('should return 3 twice if ages are 28 and 29', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should return 3 twice if ages are 29 and 30', () => {
    expect(getHumanAge(29, 30)).toEqual([3, 3]);
  });

  test('should return correcr age for random ages more then 30', () => {
    expect(getHumanAge(45, 45)).toEqual([7, 6]);
  });
});
