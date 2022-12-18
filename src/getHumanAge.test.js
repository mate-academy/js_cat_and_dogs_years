'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should check less than 14 years', () => {
    expect(getHumanAge(8, 12))
      .toEqual([0, 0]);
  });

  test('should check 14 years', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should check 15 years', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should check between 15 and 24 years', () => {
    expect(getHumanAge(20, 20))
      .toEqual([1, 1]);
  });

  test('should check 23 years', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should check 24 years', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should check between 24 and 28 years', () => {
    expect(getHumanAge(26, 26))
      .toEqual([2, 2]);
  });

  test('should check 27 & 28 years (bv lower)', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should check 28 & 29 years (bv middle)', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should check 29 & 30 years (bv upper)', () => {
    expect(getHumanAge(29, 30))
      .toEqual([3, 3]);
  });

  test('should check 30+ years', () => {
    expect(getHumanAge(32, 34))
      .toEqual([4, 4]);
  });

  test('should check 40+ years', () => {
    expect(getHumanAge(40, 49))
      .toEqual([6, 7]);
  });
});
