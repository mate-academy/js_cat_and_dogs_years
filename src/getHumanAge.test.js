/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 for the first 14 catAge or dogAge years', () => {
    expect(getHumanAge(10, 2))
      .toEqual([0, 0]);
  });

  test('should return 1 year in catAge or dogAge for the first 15 years', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should add 1 year for each next 9 years in catAge or dogAge', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should add 1 year for each next 4 years in catAge', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should add 1 year for each next 5 years in dogAge', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });
});
