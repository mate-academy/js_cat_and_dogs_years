'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('returns [0, 0] when both ages are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('returns [0, 0] when both are just below 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('returns [1, 1] at age 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('returns [1, 1] at age 23 (still in second period)', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('returns [2, 2] at age 24 (start of third period)', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('returns [2, 2] at age 27 (still in third period)', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('returns [3, 2] at age 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('returns [21, 17] at age 100 (long-lived pets)', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('returns [21, 17] at age 100 and 101 (long-lived pets)', () => {
    expect(getHumanAge(100, 101)).toEqual([21, 17]);
  });

  test('handles different values: cat=30, dog=35', () => {
    expect(getHumanAge(30, 35)).toEqual([3, 4]);
  });

  test('handles cat=38, dog=39', () => {
    expect(getHumanAge(38, 39)).toEqual([5, 5]);
  });

  test('handles cat=39 (new human year), dog=40 (new human year)', () => {
    expect(getHumanAge(39, 40)).toEqual([5, 5]);
  });

  test('returns [0, 0] at all negative numbers', () => {
    expect(getHumanAge(-30, -40)).toEqual([0, 0]);
  });

  test('returns [0, 5] at one negative numbers at cat field', () => {
    expect(getHumanAge(-30, 40)).toEqual([0, 5]);
  });

  test('returns [5, 0] at one negative numbers at dog field', () => {
    expect(getHumanAge(39, -40)).toEqual([5, 0]);
  });
});
