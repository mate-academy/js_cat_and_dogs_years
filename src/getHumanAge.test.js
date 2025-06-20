'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return 1 year for first 15 years', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should add 1 year for next 9 years', () => {
    expect(getHumanAge(15 + 9, 15 + 9)).toEqual([2, 2]);
  });

  test('should add 1 year for each next 4/5 years', () => {
    expect(getHumanAge(15 + 9 + 4, 15 + 9 + 5)).toEqual([3, 3]);
  });
});
