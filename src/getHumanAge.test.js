'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('cat age 10, dog age 10', () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  test('cat age 15, dog age 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('cat age 16, dog age 16', () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test('cat age 24, dog age 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('cat age 25, dog age 25', () => {
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  test('cat age 29, dog age 29', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('cat age 40, dog age 40', () => {
    expect(getHumanAge(40, 40)).toEqual([6, 5]);
  });

  test('cat age 100, dog age 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('edge case: cat age 0, dog age 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('edge case: cat age 15, dog age 9', () => {
    expect(getHumanAge(15, 9)).toEqual([1, 0]);
  });

  test('edge case: cat age 9, dog age 15', () => {
    expect(getHumanAge(9, 15)).toEqual([0, 1]);
  });

  test('edge case: cat age 20, dog age 20', () => {
    expect(getHumanAge(20, 20)).toEqual([1, 1]);
  });
});
