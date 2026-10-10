'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  // Provided examples
  test('should return [0, 0] for getHumanAge(0, 0)', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] for getHumanAge(14, 14)', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for getHumanAge(15, 15)', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] for getHumanAge(23, 23)', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for getHumanAge(24, 24)', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] for getHumanAge(27, 27)', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return [3, 2] for getHumanAge(28, 28)', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [21, 17] for getHumanAge(100, 100)', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  // Boundary and edge cases
  describe('edge cases', () => {
    test('should handle mixed ages (cat at threshold, dog below)', () => {
      expect(getHumanAge(15, 14)).toEqual([1, 0]);
    });

    test('should handle mixed ages (cat 2nd tier, dog 3rd tier)', () => {
      expect(getHumanAge(23, 24)).toEqual([1, 2]);
    });

    test('should handle just below the next cat threshold (27 years)', () => {
      // Cat: 2 + floor((27 - 24) / 4) = 2 + 0 = 2
      expect(getHumanAge(27, 0)).toEqual([2, 0]);
    });

    test('should handle exactly at the next cat threshold (28 years)', () => {
      // Cat: 2 + floor((28 - 24) / 4) = 2 + 1 = 3
      expect(getHumanAge(28, 0)).toEqual([3, 0]);
    });

    test('should handle just below the next dog threshold (28 years)', () => {
      // Dog: 2 + floor((28 - 24) / 5) = 2 + 0 = 2
      expect(getHumanAge(0, 28)).toEqual([0, 2]);
    });

    test('should handle exactly at the next dog threshold (29 years)', () => {
      // Dog: 2 + floor((29 - 24) / 5) = 2 + 1 = 3
      expect(getHumanAge(0, 29)).toEqual([0, 3]);
    });

    test('should handle very large numbers', () => {
      const cat = 4 * 100 + 24; // 424 -> 2 + 100 = 102
      const dog = 5 * 100 + 24; // 524 -> 2 + 100 = 102

      expect(getHumanAge(cat, dog)).toEqual([102, 102]);
    });
  });
});
