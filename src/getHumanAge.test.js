'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(0, 0)).toBeInstanceOf(Array);
  });

  describe('cat age conversion', () => {
    test('returns 0 for age 0', () => {
      expect(getHumanAge(0, 0)[0]).toBe(0);
    });

    test('returns 0 for age 14 (last year before first threshold)', () => {
      expect(getHumanAge(14, 0)[0]).toBe(0);
    });

    test('returns 1 at age 15 (first threshold)', () => {
      expect(getHumanAge(15, 0)[0]).toBe(1);
    });

    test('returns 1 at age 23 (last year before second threshold)', () => {
      expect(getHumanAge(23, 0)[0]).toBe(1);
    });

    test('returns 2 at age 24 (second threshold)', () => {
      expect(getHumanAge(24, 0)[0]).toBe(2);
    });

    test('returns 2 at age 27 (within second cat-year)', () => {
      expect(getHumanAge(27, 0)[0]).toBe(2);
    });

    // eslint-disable-next-line
    test('returns 3 at age 28 (one full cat - year past second threshold)', () => {
      expect(getHumanAge(28, 0)[0]).toBe(3);
    });

    test('returns 21 at age 100', () => {
      expect(getHumanAge(100, 0)[0]).toBe(21);
    });
  });

  describe('dog age conversion', () => {
    test('returns 0 for age 0', () => {
      expect(getHumanAge(0, 0)[1]).toBe(0);
    });

    test('returns 0 for age 14 (last year before first threshold)', () => {
      expect(getHumanAge(0, 14)[1]).toBe(0);
    });

    test('returns 1 at age 15 (first threshold)', () => {
      expect(getHumanAge(0, 15)[1]).toBe(1);
    });

    test('returns 1 at age 23 (last year before second threshold)', () => {
      expect(getHumanAge(0, 23)[1]).toBe(1);
    });

    test('returns 2 at age 24 (second threshold)', () => {
      expect(getHumanAge(0, 24)[1]).toBe(2);
    });

    // eslint-disable-next-line
    test('returns 2 at age 28 (not yet a full dog-year past second threshold)', () => {
      expect(getHumanAge(0, 28)[1]).toBe(2);
    });

    test('returns 17 at age 100', () => {
      expect(getHumanAge(0, 100)[1]).toBe(17);
    });
  });

  describe('cat vs dog divergence', () => {
    test('cat and dog have the same human age at 27', () => {
      expect(getHumanAge(27, 27)).toEqual([2, 2]);
    });

    test('cat and dog diverge at age 28 due to different year lengths', () => {
      expect(getHumanAge(28, 28)).toEqual([3, 2]);
    });
  });

  describe('invalid inputs', () => {
    // eslint-disable-next-line
    test('returns 0 for negative age (treated as below first threshold)', () => {
      expect(getHumanAge(-1, -1)).toEqual([0, 0]);
    });

    test('returns [NaN, NaN] when called without arguments', () => {
      expect(getHumanAge()).toEqual([NaN, NaN]);
    });

    test('returns [NaN, NaN] for non-number string inputs', () => {
      expect(getHumanAge('abc', 'abc')).toEqual([NaN, NaN]);
    });
  });
});
