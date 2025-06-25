'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('1', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('2', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('3', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('4', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('5', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('6', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('7', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('8', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
