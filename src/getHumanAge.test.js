'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 for both cat and dog when animal age <= 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 for both cat and dog when animal age = 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should return 2 for both cat and dog when
  animal age >= 24 and < 28`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 2 for both if cat age = 27 and dog age = 28', () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  test('should return 3 for both if cat age = 28 and dog age = 29', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should return 4 for both if cat age = 32 and dog age = 34', () => {
    expect(getHumanAge(32, 34)).toEqual([4, 4]);
  });

  test('should return 3 for both if cat age = 31 and dog age = 33', () => {
    expect(getHumanAge(31, 33)).toEqual([3, 3]);
  });

  test('should return 100 for both if cat age = 21 and dog age = 17', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
