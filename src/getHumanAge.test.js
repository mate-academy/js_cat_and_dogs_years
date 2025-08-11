'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return empty object when input is empty', () => {
    const result = getHumanAge();

    expect(result).toEqual([]);
  });

  test('should have right length', () => {
    const result = getHumanAge();

    expect(result).toHaveLength(2);
  });

  test(`should return [0, 0] when input is (0, 0)`, () => {
    const result = getHumanAge(0, 0);

    expect(typeof result[0]).toBe('number');
    expect(typeof result[1]).toBe('number');
  });

  test(`should return [0, 0] when input is (0, 0)`, () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test(`should return [0, 0] when input is (14, 14)`, () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test(`should return [1, 1] when input is (15, 15)`, () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test(`should return [1, 1] when input is (23, 23)`, () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  test(`should return [2, 2] when input is (24, 24)`, () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test(`should return [2, 2] when input is (27, 27)`, () => {
    const result = getHumanAge(27, 27);

    expect(result).toEqual([2, 2]);
  });

  test(`should return [3, 2] when input is (28, 28)`, () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test(`should return [21, 17] when input is (100, 100)`, () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
