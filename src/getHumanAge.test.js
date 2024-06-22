'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be return 0 human ages when both animals ages are < 15', () => {
    expect(getHumanAge(3, 5)).toStrictEqual([0, 0]);
  });

  test('should return 1 human ages when both animal ages > 15', () => {
    expect(getHumanAge(16, 18)).toStrictEqual([1, 1]);
  });

  test('should return NaN when values is empty', () => {
    expect(getHumanAge()).toStrictEqual([NaN, NaN]);
  });

  test(`should return 2 and 1 human age,
     when cat age = 27 and dog age = 17`, () => {
    expect(getHumanAge(27, 17)).toStrictEqual([2, 1]);
  });

  test(`should return 2 human years when catAge = 24, dogAge = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return 3 and 2 human age,
     when cat age = 30, and dog age = 24`, () => {
    expect(getHumanAge(30, 24)).toStrictEqual([3, 2]);
  });

  test(`should return 3 human years when catAge = 28, dogAge = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test(`should return 21 human years when catAge = 100`, () => {
    expect(getHumanAge(100, 0)).toEqual([21, 0]);
  });

  test(`should return 17 human years when dogAge = 100`, () => {
    expect(getHumanAge(0, 100)).toEqual([0, 17]);
  });
});
