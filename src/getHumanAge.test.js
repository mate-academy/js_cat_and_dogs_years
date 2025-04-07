'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  // test('should be declared', () => {
  //   expect(getHumanAge)
  //     .toBeInstanceOf(Function);
  // });

  test('returns [0, 0] when catAge and dogAge are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('returns [0, 0] when catAge and dogAge are both less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('returns [1, 1] when catAge and dogAge are both 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('returns [1, 1] when catAge and dogAge are both between 15 and 23',
    () => {
      expect(getHumanAge(23, 23)).toEqual([1, 1]);
    });

  test('returns [2, 2] when catAge and dogAge are both 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('returns [2, 2] when catAge and dogAge are both between 24 and 27',
    () => {
      expect(getHumanAge(27, 27)).toEqual([2, 2]);
    });

  test('returns [3, 2] when catAge is 28 and dogAge is 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('returns [21, 17] when catAge is 100 and dogAge is 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
