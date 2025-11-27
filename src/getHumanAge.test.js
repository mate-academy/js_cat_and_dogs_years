'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return 0 for 0 cat years and 0 dog years', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 and 1 human ages for 15/23 cats and 15/23 dogs', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 2 and 2 human ages for 24/27 cats and 24/27 dogs', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return 3 and 2 human ages for 28 cats and dogs', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return 21 and 17 human ages for 100 cats and dogs', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
