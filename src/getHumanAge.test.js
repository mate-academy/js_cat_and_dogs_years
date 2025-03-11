'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should check 0 year', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should check less than 14 years (in the middle of the range)', () => {
    expect(getHumanAge(6, 6))
      .toEqual([0, 0]);
  });

  test('should check 14 years (at the end of the range)', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should check 15 years (at the beginning of the range)', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should check between 15 and 23 years (in the middle of the range)', () => {
    expect(getHumanAge(20, 20))
      .toEqual([1, 1]);
  });

  test('should check 23 years (at the end of the range)', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should check 24 years (at the beginning of the range)', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should check 27 and 28 years (at the end of two ranges)', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should check 28 and 29 years (at the beginning of two ranges)', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should check 31 and 33 years (at the end of two ranges)', () => {
    expect(getHumanAge(31, 33))
      .toEqual([3, 3]);
  });

  test('should check 56 and 64 years (at the beginning of two ranges)', () => {
    expect(getHumanAge(56, 64))
      .toEqual([10, 10]);
  });

  test('should check 59 and 68 years (at the end of two ranges)', () => {
    expect(getHumanAge(59, 68))
      .toEqual([10, 10]);
  });

  test('should check between 28 and 31 years & between 49 and 53 years (in different ranges)', () => {
    expect(getHumanAge(30, 50))
      .toEqual([3, 7]);
  });
});
