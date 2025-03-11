'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zero if animalAge = 0', () => {
    expect(getHumanAge(0, 0))
      .toStrictEqual([0, 0]);
  });

  test('should return 0 if animalAge = 14', () => {
    expect(getHumanAge(14, 14))
      .toStrictEqual([0, 0]);
  });

  test('should return 1 if animalAge = 15', () => {
    expect(getHumanAge(15, 15))
      .toStrictEqual([1, 1]);
  });

  test('should return 0 and 1 if catAge = 14 and dogAge = 15', () => {
    expect(getHumanAge(14, 15))
      .toStrictEqual([0, 1]);
  });

  test('should return 1 animalAge = 23', () => {
    expect(getHumanAge(23, 23))
      .toStrictEqual([1, 1]);
  });

  test('should return 2 if animalAge = 24', () => {
    expect(getHumanAge(24, 24))
      .toStrictEqual([2, 2]);
  });

  test('should return 3 and 2 if animalAge = 28', () => {
    expect(getHumanAge(28, 28))
      .toStrictEqual([3, 2]);
  });

  test('should return 3 if catAge = 28 and dogAge = 29', () => {
    expect(getHumanAge(28, 29))
      .toStrictEqual([3, 3]);
  });

  test('should return 4 if catAge = 33 and dogAge = 35', () => {
    expect(getHumanAge(33, 35))
      .toStrictEqual([4, 4]);
  });

  test('should return 21 and 17 if animalAge = 100', () => {
    expect(getHumanAge(100, 100))
      .toStrictEqual([21, 17]);
  });
});
