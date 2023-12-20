'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('shold return array', () => {
    expect(typeof getHumanAge(12, 30)).toBe('object');
  });

  test('should be 2 numbers in the argument', () => {
    expect(getHumanAge(25, 10)).toStrictEqual([2, 0]);
  });

  test('should be converted 2 agruments into human years with value 0', () => {
    expect(getHumanAge(5, 5)).toStrictEqual([0, 0]);
  });

  test('should be converted 2 agruments into human years with value 0 - boundary value', () => {
    expect(getHumanAge(14, 14)).toStrictEqual([0, 0]);
  });

  test('should be converted 2 agruments into human years with value 1', () => {
    expect(getHumanAge(15, 15)).toStrictEqual([1, 1]);
  });

  test('should be converted 2 agruments into human years with value 1 - boundary value', () => {
    expect(getHumanAge(23, 23)).toStrictEqual([1, 1]);
  });

  test('should be converted 2 agruments into human years with value 2', () => {
    expect(getHumanAge(24, 24)).toStrictEqual([2, 2]);
  });

  test('should be converted 2 agruments into human years with value 2 - boundary value', () => {
    expect(getHumanAge(27, 28)).toStrictEqual([2, 2]);
  });

  test('should be converted 2 agruments into human years with value 3', () => {
    expect(getHumanAge(28, 29)).toStrictEqual([3, 3]);
  });

  test('should be converted 2 agruments into human years with value 4', () => {
    expect(getHumanAge(32, 34)).toStrictEqual([4, 4]);
  });

  test('should be converted 2 agruments into human years with value 5', () => {
    expect(getHumanAge(36, 39)).toStrictEqual([5, 5]);
  });

  test('should be converted 2 agruments into human years with value 6', () => {
    expect(getHumanAge(40, 45)).toStrictEqual([6, 6]);
  });

  test('should be NaN if aguments is not a number ', () => {
    expect(getHumanAge('two', 'one')).toStrictEqual([NaN, NaN]);
  });
});
