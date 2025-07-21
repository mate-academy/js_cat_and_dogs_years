'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should returns 0 when both ages are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should returns 0 for ages just below first threshold', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should returns [1, 1] at first threshold', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should returns [2, 2] at second threshold', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should returns [3, 2] when cat reaches next conversion', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should returns correct high age conversion', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
