'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if animalAge < 15', () => {
    expect(getHumanAge(3, 3))
      .toEqual([0, 0]);
  });

  test('should return 0 when cat and dog age is 14', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return 1 when cat and dog age is 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1 and 1 when cat and dog age is 23', () => {
    expect(getHumanAge(22, 22))
      .toEqual([1, 1]);
  });

  test('should return 2 and 2 when cat and dog age is 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 3 when cat age is 28 and dog age is 29', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return 3 and 2 when cat and dog age is 28', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return 4 and 3 when cat 32 and dog age is 33', () => {
    expect(getHumanAge(32, 32))
      .toEqual([4, 3]);
  });

})
