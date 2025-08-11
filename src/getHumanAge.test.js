'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('returns correct human age for both cat and dog', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('only cat age changes', () => {
    expect(getHumanAge(28, 0)).toEqual([3, 0]);
    expect(getHumanAge(100, 0)).toEqual([21, 0]);
  });

  test('only dog age changes', () => {
    expect(getHumanAge(0, 28)).toEqual([0, 2]);
    expect(getHumanAge(0, 100)).toEqual([0, 17]);
  });
});
