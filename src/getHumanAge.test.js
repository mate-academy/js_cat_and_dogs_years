'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] if ages are less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] if ages equal 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] for ages from 15 to 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] if ages equal 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return different human ages for cat and dog at age 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should correctly convert large ages', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
