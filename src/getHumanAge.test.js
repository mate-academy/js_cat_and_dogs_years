'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should count first 15 years as 1 hy', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test('should count next 9 years after 15 years as another 1 hy', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  test('should add 1 hy to cat life each 4 year after 24', () => {
    expect(getHumanAge(27, 24)).toEqual([2, 2]);
    expect(getHumanAge(28, 24)).toEqual([3, 2]);
    expect(getHumanAge(29, 24)).toEqual([3, 2]);
    expect(getHumanAge(67, 24)).toEqual([12, 2]);
    expect(getHumanAge(68, 24)).toEqual([13, 2]);
    expect(getHumanAge(69, 24)).toEqual([13, 2]);
  });

  test('should add 1 hy to dog life each 5 year after 24', () => {
    expect(getHumanAge(24, 28)).toEqual([2, 2]);
    expect(getHumanAge(24, 29)).toEqual([2, 3]);
    expect(getHumanAge(24, 30)).toEqual([2, 3]);
    expect(getHumanAge(24, 78)).toEqual([2, 12]);
    expect(getHumanAge(24, 79)).toEqual([2, 13]);
    expect(getHumanAge(24, 80)).toEqual([2, 13]);
  });
});
