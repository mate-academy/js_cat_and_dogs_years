'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('shold return array', () => {
    expect(typeof getHumanAge(12, 30)).toBe('object');
  });

  test('should be 2 numbers in the argument', () => {
    expect(getHumanAge(25, 10)).toStrictEqual([2, 0]);
  });

  test('should be NaN if aguments is not a number ', () => {
    expect(getHumanAge('two', 'one')).toStrictEqual([NaN, NaN]);
  });
});
