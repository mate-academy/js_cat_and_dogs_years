'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return Nan for Nan parameters', () => {
    expect(getHumanAge(0, 'string'))
      .toEqual([0, NaN]);
  });

  test('should return 0 for parameters 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return Nan for missing parameters', () => {
    expect(getHumanAge())
      .toEqual([NaN, NaN]);
  });

  test('should return zero years', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return one year', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return two years', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return three years', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return four years', () => {
    expect(getHumanAge(32, 34))
      .toEqual([4, 4]);
  });

  test('should return five years', () => {
    expect(getHumanAge(36, 39))
      .toEqual([5, 5]);
  });
});
