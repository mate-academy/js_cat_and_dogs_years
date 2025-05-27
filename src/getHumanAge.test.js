'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 with 0 values', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return 0, 0 if age values = 14 cats and 14 dogs', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1, 1 if age values = 15 cats and 15 dogs', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 1, 1 if age values = 23 cats and 23 dogs', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 2, 2 if age values = 24 cats and 24 dogs', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 2, 2 if age values = 27 cats and 27 dogs', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return 3, 2 if age values = 28 cats and 28 dogs', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return 68, 79 if age values = 13 cats and 13 dogs', () => {
    expect(getHumanAge(68, 79)).toEqual([13, 13]);
  });

  test('should return 21, 17 if age values = 100 cats and 100 dogs', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
