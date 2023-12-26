'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be array', () => {
    expect(getHumanAge())
      .toBeInstanceOf(Array);
  });

  test('should return 0 if both values are < 15', () => {
    expect(getHumanAge(2, 5)).toEqual([0, 0]);
  });

  test('should return 1 if both values are between 15 and 23', () => {
    expect(getHumanAge(17, 23)).toEqual([1, 1]);
  });

  test(`should convert every 4 next cat years from 24 like 1`, () => {
    expect(getHumanAge(28, 25)).toEqual([3, 2]);
  });

  test(`should convert every 5 next dog years from 24 like 1`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test(`should return 21 for catAge 
    and 17 for dogAge if both values are 100`,
  () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
