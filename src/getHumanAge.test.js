'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be[0] in human age when catAge = 0, dogAge = 0', () => {
    expect(getHumanAge(0, 0)).toStrictEqual([0, 0]);
  });

  test('should be[0, 0] in human age when catAge = 14, dogAge = 14', () => {
    expect(getHumanAge(14, 14)).toStrictEqual([0, 0]);
  });

  test('should be [1, 1] in human age when catAge = 14, dogAge = 14', () => {
    expect(getHumanAge(15, 15)).toStrictEqual([1, 1]);
  });

  test('should be [2, 2] in human age 2 when catAge = 24, dogAge = 24', () => {
    expect(getHumanAge(24, 24)).toStrictEqual([2, 2]);
  });

  test('should be [3, 2] in human age if cat age 28, dog age 28', () => {
    expect(getHumanAge(28, 28)).toStrictEqual([3, 2]);
  });

  test('should be [21, 17] in human age if catAge = 100, dogAge = 100', () => {
    expect(getHumanAge(100, 100)).toStrictEqual([21, 17]);
  });
});
