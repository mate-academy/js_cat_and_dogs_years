'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(15, 15))
      .toBeInstanceOf(Array);
  });

  test('should return [0, 0] before animal\'s 15 years', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return [1, 1] before animal\'s 24 years', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return [2, 2] at animal\'s 24 years', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should count cat\'s each 4 as 1 but dog\'s each 5 as 1', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });
});
