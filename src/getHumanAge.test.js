'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('getHumanAge should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0, when catAge = 0, dogAge = 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return 0, when catAge < 15, dogAge < 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1, when catAge = 15, dogAge = 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should return 2, when catAge = 24, dogAge = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return 2, when catAge = 27, dogAge = 27`, () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test(`should return [3, 2], when catAge = 28, dogAge = 28`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should return 3, when catAge = 29, dogAge = 29`, () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test(`should return different result, when inputs are random`, () => {
    expect(getHumanAge(69, 96)).toEqual([13, 16]);
  });
});
