'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('returns [0, 0] when both cat and dog years are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('returns [0, 0] when both cat and dog years are 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('returns [1, 1] when both cat and dog years are 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('returns [1, 1] when both cat and dog years are 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('returns [2, 2] when both cat and dog years are 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('returns [2, 2] when both cat and dog years are 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('calculates correct cat and dog years for 28 human and dog years',
    () => {
      expect(getHumanAge(28, 28)).toEqual([3, 2]);
    });

  test('returns [21, 17] when cat and dog years are both 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
