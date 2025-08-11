'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(0, 0)).toBeInstanceOf(Array);
  });

  test('should return array with length 2', () => {
    expect(getHumanAge(0, 0).length).toEqual(2);
  });

  test('should return 0 when age is 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return 0 when age < 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 when age is 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 2 when age > 15 and < 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 1 when cat age >= 15 and < 24', () => {
    expect(getHumanAge(23, 0)).toEqual([1, 0]);
  });

  test('should return 2 when cat age >= 24 and < 28', () => {
    expect(getHumanAge(27, 0)).toEqual([2, 0]);
  });

  test('should return 3 when cat age is 28', () => {
    expect(getHumanAge(28, 0)).toEqual([3, 0]);
  });

  test('should return 4 when cat age is 32', () => {
    expect(getHumanAge(32, 0)).toEqual([4, 0]);
  });

  test('should return 1 when dog age >= 15 and < 24', () => {
    expect(getHumanAge(0, 23)).toEqual([0, 1]);
  });

  test('should return 2 when dog age >= 24 and < 29', () => {
    expect(getHumanAge(0, 28)).toEqual([0, 2]);
  });

  test('should return 3 when dog age >= 29 and < 34', () => {
    expect(getHumanAge(0, 33)).toEqual([0, 3]);
  });

  test('should return 4 when dog age is 34', () => {
    expect(getHumanAge(0, 34)).toEqual([0, 4]);
  });
});
