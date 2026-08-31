'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return correct age for 14 years', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return correct age for 15 years', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return correct age for 23 years', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return correct age for 24 years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return correct age for 27 years', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return correct age for 28 years', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return correct age for 100 years', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
