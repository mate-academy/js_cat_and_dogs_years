'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] for cat and dog age of 14', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return [1, 1] for cat and dog age of 15', () => { // main
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return [1, 1] for cat and dog age of 16', () => {
    expect(getHumanAge(16, 16))
      .toEqual([1, 1]);
  });

  test('should return [1, 1] for cat and dog age of 23', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return [2, 2] for cat and dog age of 24', () => { // main +9
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return [2, 2] for cat and dog age of 25', () => {
    expect(getHumanAge(25, 25))
      .toEqual([2, 2]);
  });

  test('should return [2, 2] for cat age 27 and dog age 28', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should return [3, 3] for cat age 28 and dog age 29', () => {
    // main +4 +5
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return [3, 3] for cat age 29 and dog age 30', () => {
    expect(getHumanAge(29, 30))
      .toEqual([3, 3]);
  });

  test('should return [21, 17] for cat and dog age of 100', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });

  test('should return zeros for two zeros', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return zeros for two negative numbers', () => {
    expect(getHumanAge(-1, -1))
      .toEqual([0, 0]);
  });
});
