'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should convert minimal ages correctly (less than 15)', () => {
    expect(getHumanAge(10, 5)).toEqual([0, 0]);
  });

  test('should convert minimal ages correctly (less than)', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should convert ages equal to first threshold (15 < age <24)', () => {
    expect(getHumanAge(20, 20)).toEqual([1, 1]);
  });

  test('should convert exactly second threshold (15 + 9)', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should convert values above thresholds correctly (with rounding down)',
    () => {
      expect(getHumanAge(28, 29)).toEqual([
        2 + Math.floor((28 - 24) / 4), // 2 + 1 = 3
        2 + Math.floor((29 - 24) / 5), // 2 + 1 = 3
      ]);
    });

  test('should convert very large ages', () => {
    expect(getHumanAge(60, 70)).toEqual([
      2 + Math.floor((60 - 24) / 4), // 2 + 9 = 11
      2 + Math.floor((70 - 24) / 5), // 2 + 9 = 11
    ]);
  });

  test('should handle animal age at threshold step', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);

    expect(getHumanAge(32, 34)).toEqual([
      2 + Math.floor((32 - 24) / 4), // 2 + 2 = 4
      2 + Math.floor((34 - 24) / 5), // 2 + 2 = 4
    ]);
  });

  test('should return [0, 0] if both ages are less than 15', () => {
    expect(getHumanAge(1, 1)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });
});
