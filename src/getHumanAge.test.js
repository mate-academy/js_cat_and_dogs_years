'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('cant return ages if cat and dog are younger than 15 years old', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return 1 year old for both, when input 15 for both', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1 year old for both, when input 23 for both', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 years old for both, when input 24 for both', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2 years both, when catAge is 27 and dogAge is 28', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should return 3 years both, when catAge is 28 and dogAge is 29', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return [21, 17] when input is [100, 100]', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });

  test('should return [3, 2] when input is [28, 28]', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });
});
