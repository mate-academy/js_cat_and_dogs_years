'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should convert 0 cat age and 0 dog age to 0 human years', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should convert cat age 10 and dog age 10 to 1 human year', () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  test('should convert cat,dog age 20 and 22 to 3 and 2 human years', () => {
    expect(getHumanAge(20, 22)).toEqual([1, 1]);
  });

  test('should convert cat age 24 and dog age 24 to 2 human years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should convert cat,dog age 30 and 35 to 4 and 4 human years', () => {
    expect(getHumanAge(30, 35)).toEqual([3, 4]);
  });

  test('should convert cat,dog age 40 and 25 to 6 and 3 human years', () => {
    expect(getHumanAge(40, 25)).toEqual([6, 2]);
  });

  test('should convert cat,dog age 28 and 29 to 4 and 3 human years', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should convert cat age 0 and dog age 0 to 0 human years', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should convert cat,dog age 100 and 100to 12 and 12 human years', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  // Boundary value tests

  test(`should handle boundary value where
    cat age is just below the first threshold`, () => {
    expect(getHumanAge(14, 0)).toEqual([0, 0]);
  });

  test(`should handle boundary value where
    cat age is exactly at the first threshold`, () => {
    expect(getHumanAge(15, 0)).toEqual([1, 0]);
  });

  test(`should handle boundary value where
    cat age is just below the second threshold`, () => {
    expect(getHumanAge(23, 0)).toEqual([1, 0]);
  });

  test(`should handle boundary value where
     cat age is exactly at the second threshold`, () => {
    expect(getHumanAge(24, 0)).toEqual([2, 0]);
  });

  test(`should handle boundary value
    where cat age is just above the second threshold`, () => {
    expect(getHumanAge(25, 0)).toEqual([2, 0]);
  });

  test(`should handle boundary value
    where dog age is exactly at the first threshold`, () => {
    expect(getHumanAge(0, 15)).toEqual([0, 1]);
  });

  test(`should handle boundary value where
     dog age is just above the second threshold`, () => {
    expect(getHumanAge(0, 26)).toEqual([0, 2]);
  });

  test(`should handle boundary value where
    both cat and dog ages are just above their respective thresholds`, () => {
    expect(getHumanAge(25, 26)).toEqual([2, 2]);
  });

  test(`should handle boundary value where
     cat age is very high and dog age is very low`, () => {
    expect(getHumanAge(100, 10)).toEqual([21, 0]);
  });

  test(`should handle boundary value where
    cat age is very low and dog age is very high`, () => {
    expect(getHumanAge(10, 100)).toEqual([0, 17]);
  });
});
