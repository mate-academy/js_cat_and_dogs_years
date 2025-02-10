'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  describe('should return zero', () => {
    test('for newborns and young animals', () => {
      expect(getHumanAge(0, 0)).toEqual([0, 0]);
      expect(getHumanAge(14, 14)).toEqual([0, 0]);
    });
  });

  describe('should return correct values for different ages', () => {
    test('when age is 15-23', () => {
      expect(getHumanAge(15, 15)).toEqual([1, 1]);
      expect(getHumanAge(23, 23)).toEqual([1, 1]);
    });

    test('when age is 24-27', () => {
      expect(getHumanAge(24, 24)).toEqual([2, 2]);
      expect(getHumanAge(27, 27)).toEqual([2, 2]);
    });

    test('when age is 28-29', () => {
      expect(getHumanAge(28, 29)).toEqual([3, 3]);
    });
  });

  test('should return [21, 17] for getHumanAge(100, 100)', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
