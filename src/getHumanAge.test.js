'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an object data type', () => {
    expect(typeof getHumanAge())
      .toBe('object');
  });

  test('should return zero when input is (0, 0)', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return NaN if one of the inputs is not a number', () => {
    expect(getHumanAge(15, NaN))
      .toEqual([1, NaN]);
  });

  test('should return zero for both animals when input is less than 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return 1 for both animals when input is 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1 for both animals when input is 23', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 for both animals when input is 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 3 when input is 28 for cat and 29 for dog', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return 4 when input is 33 for cat and 34 for dog', () => {
    expect(getHumanAge(33, 34))
      .toEqual([4, 4]);
  });
});
