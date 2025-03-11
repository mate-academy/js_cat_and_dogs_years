'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(15, 15)).toBeInstanceOf(Array);
  });

  test('should return 0 for animals of 0-14 years old', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return equel human years for animals of 15-27 years old', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test(
    'should return different human years for animals of >= 28 years old',
    () => {
      expect(getHumanAge(28, 28)).toEqual([3, 2]);
      expect(getHumanAge(100, 100)).toEqual([21, 17]);
    });
});
