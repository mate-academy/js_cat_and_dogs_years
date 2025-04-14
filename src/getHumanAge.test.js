'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should be return 0 if catAge or dogAge is equal 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should be return a right value for first 14 cat & dog age]', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should be return a right value for first 15 cat & dog age]', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should be return a right value for first 23 cat & dog age]', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should be return a right value for first 24 cat & dog age]', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should be return a right value for first 27 cat & dog age]', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should be return a right value for first 28 cat & dog age]', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should be return a right value for first 100 cat & dog age]', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
