'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 when adding zeroes', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 0 when input (14, 14)', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return NaN, when input in not digit', () => {
    expect(getHumanAge('qq', 'ww'))
      .toEqual([NaN, NaN]);
  });

  test('should return (1, 1) when input (15, 15)', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return (1, 1) when input (15.6, 15.9)', () => {
    expect(getHumanAge(15.6, 15.9))
      .toEqual([1, 1]);
  });

  test('should return (2, 2) when input (24, 24)', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return (2, 2) when input (28, 28.7)', () => {
    expect(getHumanAge(28, 28.7))
      .toEqual([3, 2]);
  });

  test('should return (21, 17) when input (100.7, 100)', () => {
    expect(getHumanAge(100.7, 100))
      .toEqual([21, 17]);
  });

  test('should return (0, 0) when input is negative (-100.7, -100)', () => {
    expect(getHumanAge(-100.7, -100))
      .toEqual([0, 0]);
  });
});
