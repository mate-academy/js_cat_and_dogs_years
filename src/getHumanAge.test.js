'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(15, 15))
      .toBeInstanceOf(Object);
  });

  test('should return correct before the first threshould', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return correct result when the first threshould is met', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return correct before the second threshould', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return correct result when the third threshould is met', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return correct before the third threshould', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should return correct result when the third threshould is met', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return zeros for zeros input', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return integers', () => {
    expect(getHumanAge(23.2, 23.2))
      .toEqual([1, 1]);
  });

  test('should return zeroes for negative numbers', () => {
    expect(getHumanAge(-28, -29))
      .toEqual([0, 0]);
  });

  test(`should return zeroes when inputs are lower 
    than first threshould`, () => {
    expect(getHumanAge(-14, -14))
      .toEqual([0, 0]);
  });
});
