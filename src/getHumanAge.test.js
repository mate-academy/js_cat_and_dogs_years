'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('returns [0, 0] when both cat and dog are 0', () => {
    const result = getHumanAge(0, 0);

    expect(result).toHaveLength(2);
    expect(result).toEqual([0, 0]);
  });

  test('returns [catHumanYears, dogHumanYears] as a pair of values', () => {
    const result = getHumanAge(10, 10);

    expect(result).toHaveLength(2);
  });

  test('returns [0, 0] when both cat and dog age are below thresholds', () => {
    const result = getHumanAge(14, 14);

    expect(result[0]).toBe(0);
    expect(result[1]).toBe(0);
  });

  // eslint-disable-next-line max-len
  test('returns [1, 1] when both cat and dog age equal first threshold (15)', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('returns [1, 1] when both are just before 2nd threshold', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('returns [2, 2] when both are exactly at 2nd threshold', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('returns [2, 3] when both are above second thresholds', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('returns [3, 3] for specific input', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('returns [21, 17] for large values', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
