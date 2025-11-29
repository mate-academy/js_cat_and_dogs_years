'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should have expected values then we have zeros income', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test(
    'have income boundary values to one year of animals ages', () => {
      const result = getHumanAge(14, 14);

      expect(result).toEqual([0, 0]);
    });

  test(
    'have income boundary values to one year of animals ages', () => {
      const result = getHumanAge(14, 14);

      expect(result).toEqual([0, 0]);
    });

  test(
    'should have expected values one animals years', () => {
      const result = getHumanAge(15, 15);

      expect(result).toEqual([1, 1]);
    });

  test(
    'have income boundary values to two years of animals ages', () => {
      const result = getHumanAge(23, 23);

      expect(result).toEqual([1, 1]);
    });

  test(
    'should have expected values two animals years', () => {
      const result = getHumanAge(24, 24);

      expect(result).toEqual([2, 2]);
    });

  test(
    'have income boundary values to three years of cat\'s ages', () => {
      const result = getHumanAge(27, 27);

      expect(result).toEqual([2, 2]);
    });

  test(
    'should have expected values three cat\'s and two dog\'s years', () => {
      const result = getHumanAge(28, 28);

      expect(result).toEqual([3, 2]);
    });

  test(
    // eslint-disable-next-line max-len
    'should have expected values with very big income amount of human\'s years', () => {
      const result = getHumanAge(100, 100);

      expect(result).toEqual([21, 17]);
    });
});
