'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('test for negative numbers', () => {
    expect(getHumanAge(-24, -15))
      .toEqual([0, 0]);
  });

  test('test for empty values', () => {
    expect(getHumanAge())
      .toEqual([NaN, NaN]);

    expect(getHumanAge(15, NaN))
      .toEqual([1, NaN]);

    expect(getHumanAge(NaN, 15))
      .toEqual([NaN, 1]);
  });

  test('test for zero values', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('test edge value for (15)', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);

    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('test edge value for (24)', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);

    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('test edge value for cat(28)', () => {
    expect(getHumanAge(27, 0))
      .toEqual([2, 0]);

    expect(getHumanAge(28, 0))
      .toEqual([3, 0]);
  });

  test('test edge value for dog(29)', () => {
    expect(getHumanAge(0, 28))
      .toEqual([0, 2]);

    expect(getHumanAge(0, 29))
      .toEqual([0, 3]);
  });

  test('test for non number input', () => {
    expect(getHumanAge('15', '-24'))
      .toEqual([1, 0]);
  });
});
