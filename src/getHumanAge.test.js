'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [NaN, NaN] when there is no input values', () => {
    expect(getHumanAge())
      .toStrictEqual([NaN, NaN]);
  });

  test('should return [NaN, NaN] with string type input values', () => {
    expect(getHumanAge('a', 'c'))
      .toStrictEqual([NaN, NaN]);
  });

  test('should return [0, 0] when input is (0, 0)', () => {
    expect(getHumanAge(0, 0))
      .toStrictEqual([0, 0]);
  });

  test('should return [0, 0] when input is (14, 14)', () => {
    expect(getHumanAge(14, 14))
      .toStrictEqual([0, 0]);
  });

  test('should return [1, 1] when input is (15, 15)', () => {
    expect(getHumanAge(15, 15))
      .toStrictEqual([1, 1]);
  });

  test('should return [1, 1] when input is (23, 23)', () => {
    expect(getHumanAge(23, 23))
      .toStrictEqual([1, 1]);
  });

  test('should return [2, 2] when input is (24, 24)', () => {
    expect(getHumanAge(24, 24))
      .toStrictEqual([2, 2]);
  });

  test('should return [2, 2] when input is (27, 27)', () => {
    expect(getHumanAge(27, 27))
      .toStrictEqual([2, 2]);
  });

  test('should return [3, 2] when input is (28, 28)', () => {
    expect(getHumanAge(28, 28))
      .toStrictEqual([3, 2]);
  });

  test('should return [21, 17] when input is (100, 100)', () => {
    expect(getHumanAge(100, 100))
      .toStrictEqual([21, 17]);
  });
});
