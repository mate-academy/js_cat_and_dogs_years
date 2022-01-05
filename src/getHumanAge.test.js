'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array of zeros ', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return an array of zeros ', () => {
    expect(getHumanAge(1, 2)).toEqual([0, 0]);
  });

  test('should return [1, 1] ', () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test('should return [2, 2]', () => {
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  test('should return [3, 3]', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('should return [NaN, NaN]', () => {
    expect(getHumanAge(NaN, NaN)).toEqual([NaN, NaN]);
  });

  test('should return array with integers', () => {
    expect(getHumanAge(22.2, 22.2)).toEqual([1, 1]);
  });

  test('should return [NaN, NaN], if catAge and dogAge are String', () => {
    expect(getHumanAge('abc', 'abc')).toEqual([NaN, NaN]);
  });

  test('should return [246, 197]', () => {
    expect(getHumanAge(1000, 1000)).toEqual([246, 197]);
  });
});
