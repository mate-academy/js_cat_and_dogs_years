/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(
    'should return array with zero values if cat and dog years are less then 15',
    () => {
      const result = getHumanAge(10, 10);

      expect(result).toEqual([0, 0]);
    });

  test(
    'should return array with 1 values if cat and dog years are less then 24',
    () => {
      const result = getHumanAge(15, 15);

      expect(result).toEqual([1, 1]);
    });

  test(
    'should return array with values [12, 12] if arguments are equal 64 and 74',
    () => {
      const result = getHumanAge(64, 74);

      expect(result).toEqual([12, 12]);
    });
});
