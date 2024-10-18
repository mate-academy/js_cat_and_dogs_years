'use strict';

describe('getHumanAge', () => {
  const getHumanAge = require('./getHumanAge'); // Importing the function

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for both ages 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] for ages below human equivalent', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for ages equal to 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] for ages 15 and 16', () => {
    expect(getHumanAge(15, 16)).toEqual([1, 1]);
  });

  test('should return [2, 2] for ages 24 and 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] for ages 27 and 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return [3, 2] for ages 28 and 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [21, 17] for ages 100 and 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  // Additional tests for edge cases
  test('should return human age for various cat ages', () => {
    expect(getHumanAge(16, 0)).toEqual([1, 0]); // Cat age 16
    expect(getHumanAge(30, 0)).toEqual([3, 0]); // Cat age 30
    expect(getHumanAge(34, 0)).toEqual([4, 0]); // Cat age 34
  });

  test('should return human age for various dog ages', () => {
    expect(getHumanAge(0, 16)).toEqual([0, 1]); // Dog age 16
    expect(getHumanAge(0, 30)).toEqual([0, 3]); // Dog age 30
    expect(getHumanAge(0, 35)).toEqual([0, 4]); // Dog age 35
  });
});
