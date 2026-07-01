'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return an array with two numbers', () => {
    const result = getHumanAge(0, 0);

    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(2);
    expect(typeof result[0]).toBe('number');
    expect(typeof result[1]).toBe('number');
  });

  describe('cat age conversion', () => {
    test('should return 0 human years for cat age under 15', () => {
      expect(getHumanAge(0, 0)).toEqual([0, 0]);
      expect(getHumanAge(5, 0)).toEqual([0, 0]);
      expect(getHumanAge(14, 0)).toEqual([0, 0]);
    });

    test('should return 1 human year for cat age from 15 to 23', () => {
      expect(getHumanAge(15, 0)).toEqual([1, 0]);
      expect(getHumanAge(20, 0)).toEqual([1, 0]);
      expect(getHumanAge(23, 0)).toEqual([1, 0]);
    });

    test('should return 2 human years for cat age from 24 to 27', () => {
      expect(getHumanAge(24, 0)).toEqual([2, 0]);
      expect(getHumanAge(25, 0)).toEqual([2, 0]);
      expect(getHumanAge(27, 0)).toEqual([2, 0]);
    });

    test('should return 3 human years for cat age of 28', () => {
      expect(getHumanAge(28, 0)).toEqual([3, 0]);
      expect(getHumanAge(31, 0)).toEqual([3, 0]);
    });

    test('should return 21 human years for cat age of 100', () => {
      expect(getHumanAge(100, 0)).toEqual([21, 0]);
    });
  });

  describe('dog age conversion', () => {
    test('should return 0 human years for dog age under 15', () => {
      expect(getHumanAge(0, 0)).toEqual([0, 0]);
      expect(getHumanAge(0, 5)).toEqual([0, 0]);
      expect(getHumanAge(0, 14)).toEqual([0, 0]);
    });

    test('should return 1 human year for dog age from 15 to 23', () => {
      expect(getHumanAge(0, 15)).toEqual([0, 1]);
      expect(getHumanAge(0, 20)).toEqual([0, 1]);
      expect(getHumanAge(0, 23)).toEqual([0, 1]);
    });

    test('should return 2 human years for dog age from 24 to 28', () => {
      expect(getHumanAge(0, 24)).toEqual([0, 2]);
      expect(getHumanAge(0, 27)).toEqual([0, 2]);
      expect(getHumanAge(0, 28)).toEqual([0, 2]);
    });

    test('should return 3 human years for dog age of 29', () => {
      expect(getHumanAge(0, 29)).toEqual([0, 3]);
      expect(getHumanAge(0, 33)).toEqual([0, 3]);
    });

    test('should return 17 human years for dog age of 100', () => {
      expect(getHumanAge(0, 100)).toEqual([0, 17]);
    });
  });

  describe('README examples and cross-combinations', () => {
    test('examples from the task description', () => {
      expect(getHumanAge(0, 0)).toEqual([0, 0]);
      expect(getHumanAge(14, 14)).toEqual([0, 0]);
      expect(getHumanAge(15, 15)).toEqual([1, 1]);
      expect(getHumanAge(23, 23)).toEqual([1, 1]);
      expect(getHumanAge(24, 24)).toEqual([2, 2]);
      expect(getHumanAge(27, 27)).toEqual([2, 2]);
      expect(getHumanAge(28, 28)).toEqual([3, 2]);
      expect(getHumanAge(100, 100)).toEqual([21, 17]);
    });

    test('different combination of ages', () => {
      expect(getHumanAge(15, 24)).toEqual([1, 2]);
      expect(getHumanAge(28, 15)).toEqual([3, 1]);
      expect(getHumanAge(100, 28)).toEqual([21, 2]);
    });
  });
});
