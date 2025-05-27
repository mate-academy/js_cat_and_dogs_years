'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for age less than 15', () => {
    expect(getHumanAge(10, 5)).toEqual([0, 0]);
  });

  test('should return [1, 1] for age between 15 and 24 (cat) and 15 and 24 (dog)', () => {
    expect(getHumanAge(20, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for age exactly 15 + 9 = 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should correctly convert cat age beyond 24', () => {
    // 15 + 9 + (4 * 2) = 32 → 2 + 2 = 4
    expect(getHumanAge(32, 0)).toEqual([4, 0]);
  });

  test('should correctly convert dog age beyond 24', () => {
    // 15 + 9 + (5 * 3) = 39 → 2 + 3 = 5
    expect(getHumanAge(0, 39)).toEqual([0, 5]);
  });

  test('should handle edge case: exact thresholds', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);   // Exactly 15
    expect(getHumanAge(24, 24)).toEqual([2, 2]);   // Exactly 15 + 9
    expect(getHumanAge(29, 29)).toEqual([3, 3]);   // +1 period
  });

  test('should handle large age values', () => {
    expect(getHumanAge(60, 60)).toEqual([
      2 + Math.floor((60 - 15 - 9) / 4),
      2 + Math.floor((60 - 15 - 9) / 5),
    ]);
  });

  test('should handle zero age', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return integers only', () => {
    const [catHuman, dogHuman] = getHumanAge(30, 30);
    expect(Number.isInteger(catHuman)).toBe(true);
    expect(Number.isInteger(dogHuman)).toBe(true);
  });
});
