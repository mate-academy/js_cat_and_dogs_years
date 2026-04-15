'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test(`should calculate large and different ages 
    for dogs and cats correctly`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should calculate age at first threshold', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should calculate too small ages', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should calculate medium ages', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return zero human age for zero animal age', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });
});
