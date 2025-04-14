'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('returns [0, 0] when both catAge and dogAge are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('returns [0, 0] when both catAge and dogAge are less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('returns [1, 1] when both catAge and dogAge are exactly 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(
    'returns [1, 1] when both catAge and dogAge are between 15 and 24',
    () => expect(getHumanAge(23, 23)).toEqual([1, 1]),
  );

  test('returns [2, 2] when both catAge and dogAge are exactly 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('returns [2, 2] when both catAge and dogAge are 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test(
    'returns correct values when catAge and dogAge are different',
    () => expect(getHumanAge(28, 27)).toEqual([3, 2]),
  );

  test(
    'returns correct human years and handles large values',
    () => expect(getHumanAge(100, 100)).toEqual([21, 17]),
  );

  test(
    'correctly calculates different increments for cat and dog beyond 24 years',
    () => expect(getHumanAge(28, 15)).toEqual([3, 1]),
  );
});
