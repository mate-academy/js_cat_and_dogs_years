'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('returns [0, 0] when both cat and dog ages are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('returns [0, 0] when both cat and dog ages are less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('returns [1, 1] when both cat and dog ages are 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('returns [1, 1] when cat and dog ages are between 15 and 24', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('returns [2, 2] when both cat and dog ages are 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('returns [2, 2] when both cat and dog ages are 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('returns [3, 2] when cat age is 28 and dog age is 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('returns [21, 17] when cat age is 100 and dog age is 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should be return 0 if catAge or dogAge is equal 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should be return a right value for first 14 cat & dog age', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should be return a right value for first 15 cat & dog age', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should be return a right value for first 24 cat & dog age', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should be return a right value for first 28 cat & dog age', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should be return a right value for dogAge & catAge', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
