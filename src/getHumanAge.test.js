'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return a 0 for 0 years', () => {
    expect(getHumanAge(0, 0))
      .toStrictEqual([0, 0]);
  });

  test('should return a 0 for less than 15 first years', () => {
    expect(getHumanAge(14, 14))
      .toStrictEqual([0, 0]);
  });

  test('should return a 1 year for the first 15 human years', () => {
    expect(getHumanAge(15, 15))
      .toStrictEqual([1, 1]);
  });

  test('should return a 1 year for 23 human years', () => {
    expect(getHumanAge(23, 23))
      .toStrictEqual([1, 1]);
  });

  test('should return a 2 year for 24 human years', () => {
    expect(getHumanAge(24, 24))
      .toStrictEqual([2, 2]);
  });

  test('should return a 2 years for the 25 human years', () => {
    expect(getHumanAge(25, 25))
      .toStrictEqual([2, 2]);
  });

  test('should increase cats age by one for next 4 human years', () => {
    expect(getHumanAge(28, 28))
      .toStrictEqual([3, 2]);
  });

  test('should increase dogs age by one for next 5 human years', () => {
    expect(getHumanAge(29, 29))
      .toStrictEqual([3, 3]);
  });

  test('should increase dogs for 5, cats for 4', () => {
    expect(getHumanAge(100, 100))
      .toStrictEqual([21, 17]);
  });
});
