'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an equivalence value', () => {
    expect(getHumanAge(5, 5))
      .toEqual([0, 0]);
  });

  test('should return an equivalence value', () => {
    expect(getHumanAge(18, 19))
      .toEqual([1, 1]);
  });

  test('should return an equivalence value', () => {
    expect(getHumanAge(26, 27))
      .toEqual([2, 2]);
  });

  test('should return an equivalence value', () => {
    expect(getHumanAge(50, 54))
      .toEqual([8, 8]);
  });

  test('should return an equivalence value', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });

  test('should return an boundary value', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return an boundary value', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return an boundary value', () => {
    expect(getHumanAge(16, 16))
      .toEqual([1, 1]);
  });

  test('should return an boundary value', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return an boundary value', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return an boundary value', () => {
    expect(getHumanAge(25, 25))
      .toEqual([2, 2]);
  });

  test('should return an boundary value', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should return an boundary value', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return an boundary value', () => {
    expect(getHumanAge(29, 30))
      .toEqual([3, 3]);
  });
});
