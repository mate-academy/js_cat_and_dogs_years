'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 for parameters 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return zero years for botn in HumanAge', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return the first year for botn in HumanAge', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return one year for both in HumanAge', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return the first two years for both in HumanAge', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return different years for cat and dog in HumanAge', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return expected years in HumanAge', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17])
  });

  test('should return Nan for Nan parameters', () => {
    expect(getHumanAge(0, 'string'))
      .toEqual([0, NaN]);
  });

  test('should return Nan for missing parameters', () => {
    expect(getHumanAge())
      .toEqual([NaN, NaN]);
  });
});
