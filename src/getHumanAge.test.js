'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('cat age 14, dog age 14', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('cat age 15, dog age 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('cat age 16, dog age 16', () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test('cat age 23, dog age 23', () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test('cat age 24, dog age 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('cat age 27, dog age 28', () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  test('cat age 28, dog age 29', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('cat age 29, dog age 30', () => {
    expect(getHumanAge(29, 30)).toEqual([3, 3]);
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
});
