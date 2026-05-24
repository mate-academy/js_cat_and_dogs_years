'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  describe('return value structure', () => {
    test('should return an array', () => {
      expect(Array.isArray(getHumanAge(0, 0))).toBe(true);
    });

    test('should return an array of 2 elements', () => {
      expect(getHumanAge(0, 0)).toHaveLength(2);
    });

    test('should contain numbers in the returned array', () => {
      const result = getHumanAge(28, 28);

      expect(typeof result[0]).toBe('number');
      expect(typeof result[1]).toBe('number');
    });
  });

  describe('boundary cases (0, 1, 2 human years)', () => {
    test('should return [0, 0] for cat age 0 and dog age 0', () => {
      expect(getHumanAge(0, 0)).toEqual([0, 0]);
    });

    test('should return [0, 0] for ages 14 (just below first boundary)', () => {
      expect(getHumanAge(14, 14)).toEqual([0, 0]);
    });

    test('should return [1, 1] for ages 15 (first boundary)', () => {
      expect(getHumanAge(15, 15)).toEqual([1, 1]);
    });

    test('should return [1, 1] for ages 23 (below second boundary)', () => {
      expect(getHumanAge(23, 23)).toEqual([1, 1]);
    });

    test('should return [2, 2] for ages 24 (second boundary)', () => {
      expect(getHumanAge(24, 24)).toEqual([2, 2]);
    });
  });

  describe('cat age conversion', () => {
    test('should return 0 human years for cat age 14', () => {
      expect(getHumanAge(14, 0)[0]).toBe(0);
    });

    test('should return 1 human year for cat age 15', () => {
      expect(getHumanAge(15, 0)[0]).toBe(1);
    });

    test('should return 1 human year for cat age 23', () => {
      expect(getHumanAge(23, 0)[0]).toBe(1);
    });

    test('should return 2 human years for cat age 24', () => {
      expect(getHumanAge(24, 0)[0]).toBe(2);
    });

    test('should return 3 human years for cat age 28 (24 + 4)', () => {
      expect(getHumanAge(28, 0)[0]).toBe(3);
    });

    test('should return 4 human years for cat age 32 (24 + 4 * 2)', () => {
      expect(getHumanAge(32, 0)[0]).toBe(4);
    });
  });

  describe('dog age conversion', () => {
    test('should return 0 human years for dog age 14', () => {
      expect(getHumanAge(0, 14)[1]).toBe(0);
    });

    test('should return 1 human year for dog age 15', () => {
      expect(getHumanAge(0, 15)[1]).toBe(1);
    });

    test('should return 1 human year for dog age 23', () => {
      expect(getHumanAge(0, 23)[1]).toBe(1);
    });

    test('should return 2 human years for dog age 24', () => {
      expect(getHumanAge(0, 24)[1]).toBe(2);
    });

    test('should return 3 human years for dog age 29 (24 + 5)', () => {
      expect(getHumanAge(0, 29)[1]).toBe(3);
    });

    test('should return 4 human years for dog age 34 (24 + 5 * 2)', () => {
      expect(getHumanAge(0, 34)[1]).toBe(4);
    });
  });

  describe('standard cases (3+ years)', () => {
    test('should return [3, 2] for cat 28, dog 28 (different steps)', () => {
      expect(getHumanAge(28, 28)).toEqual([3, 2]);
    });

    test('should return [3, 3] for cat 28 and dog 29', () => {
      expect(getHumanAge(28, 29)).toEqual([3, 3]);
    });

    test('should return [11, 9] for cat 60 and dog 59', () => {
      expect(getHumanAge(60, 59)).toEqual([11, 9]);
    });
  });

  describe('negative age handling', () => {
    test('should return [0, 0] for negative cat and dog ages', () => {
      expect(getHumanAge(-1, -1)).toEqual([0, 0]);
    });
  });
});
