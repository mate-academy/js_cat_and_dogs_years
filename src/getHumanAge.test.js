'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('getHumanAge(0, 0) === [0, 0]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('getHumanAge(0, 0) === [0, 0]', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('getHumanAge(0, 0) === [0, 0]', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('getHumanAge(0, 0) === [0, 0]', () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test('getHumanAge(0, 0) === [0, 0]', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('getHumanAge(0, 0) === [0, 0]', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('getHumanAge(0, 0) === [0, 0]', () => {
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  test('getHumanAge(0, 0) === [0, 0]', () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  test('getHumanAge(0, 0) === [0, 0]', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('getHumanAge(0, 0) === [0, 0]', () => {
    expect(getHumanAge(29, 30)).toEqual([3, 3]);
  });

  test('getHumanAge(0, 0) === [0, 0]', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
