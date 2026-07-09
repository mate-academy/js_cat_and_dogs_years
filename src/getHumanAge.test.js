'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('Should return zeros for initial values (0 years)', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('Should return zeros just before the first threshold (14 years)', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('Should return ones exactly at the first threshold (15 years)', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('Should return ones at the upper limit of 23 years', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('Should return two exactly at the start of the threshold', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('Should return two at the upper limit for a 2 year for cat', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('Should increment cat age but keep dog age at 2', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('Should increment dog age to 3 when it reaches its 5 year', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('Should correctly calculate human age for older animals', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('Should correctly handle different ages for cat and dog', () => {
    expect(getHumanAge(15, 28)).toEqual([1, 2]);
    expect(getHumanAge(28, 14)).toEqual([3, 0]);
  });
});
