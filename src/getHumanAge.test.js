'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return for cat and dog - 0 if humanAge = 5', () => {
    expect(getHumanAge(5, 5))
      .toEqual([0, 0]);
  });

  test('should return for cat and dog - 1 if humanAge = 18 and 19', () => {
    expect(getHumanAge(18, 19))
      .toEqual([1, 1]);
  });

  test('should not return for cat and dog - 1 if humanAge  = 18 and 19', () => {
    expect(getHumanAge(18, 19))
      .not.toEqual([0, 0]);
  });

  test('should return for cat and dog - 2 if humanAge = 26 and 27', () => {
    expect(getHumanAge(26, 27))
      .toEqual([2, 2]);
  });

  test('should return for cat and dog - 8 if humanAge = 50 and 54', () => {
    expect(getHumanAge(50, 54))
      .toEqual([8, 8]);
  });

  test('should return for cat - 21 and dog - 17 if humanAge = 100', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });

  test('should return for cat and dog - 0 if humanAge = 14', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should not return for cat and dog - 0 if humanAge = 14', () => {
    expect(getHumanAge(14, 14))
      .not.toEqual([1, 1]);
  });

  test('should return for cat and dog - 1 if humanAge = 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return for cat and dog - 1 if human age = 16', () => {
    expect(getHumanAge(16, 16))
      .toEqual([1, 1]);
  });

  test('should return for cat and dog - 1 if humanAge = 23', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return for cat and dog - 2 if humanAge = 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return for cat and dog - 2 if humanAge = 25', () => {
    expect(getHumanAge(25, 25))
      .toEqual([2, 2]);
  });

  test('should return for cat and dog - 2 if humanAge = 27 and 28', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should return for cat and dog - 3 if humanAge = 28 and 29', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return for cat and dog - 3 if humanAge = 29 and 30', () => {
    expect(getHumanAge(29, 30))
      .toEqual([3, 3]);
  });
});
