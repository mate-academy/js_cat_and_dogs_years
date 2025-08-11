'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should be declared', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should be declared', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should be declared', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should be declared', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should be declared', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should be declared', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should be declared', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should be declared', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should be declared', () => {
    expect(getHumanAge(31, 33)).toEqual([3, 3]);
  });

  test('should be declared', () => {
    expect(getHumanAge(32, 34)).toEqual([4, 4]);
  });

  test('should be declared', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
