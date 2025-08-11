'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return an array`, () => {
    const result = getHumanAge(48, 48);

    expect(result)
      .toBeInstanceOf(Array);
  });

  test('should return an array with two elements', () => {
    const result = getHumanAge(52, 52);

    expect(result)
      .toHaveLength(2);
  });

  test('should return zeroes if both elements are zeroes', () => {
    const result = getHumanAge(0, 0);

    expect(result)
      .toEqual([0, 0]);
  });

  test('should return NaN if there is no elements', () => {
    const result = getHumanAge();

    expect(result)
      .toEqual([NaN, NaN]);
  });

  test('should return NaN if one of elements are missed', () => {
    const result = getHumanAge(90);

    expect(result)
      .toEqual([18, NaN]);
  });

  test('should return NaN if one of elements is not a number', () => {
    const result = getHumanAge('k', 52);

    expect(result)
      .toEqual([NaN, 7]);
  });

  test('should return zeroes if cat and dog ages are 14', () => {
    const result = getHumanAge(14, 14);

    expect(result)
      .toEqual([0, 0]);
  });

  test('should return 1 if cat and dog ages are 15', () => {
    const result = getHumanAge(15, 15);

    expect(result)
      .toEqual([1, 1]);
  });

  test('should return 1 if cat and dog ages are 23', () => {
    const result = getHumanAge(23, 23);

    expect(result)
      .toEqual([1, 1]);
  });

  test('should return 2 if cat and dog ages are 24', () => {
    const result = getHumanAge(24, 24);

    expect(result)
      .toEqual([2, 2]);
  });

  test('should return 2 if cat ages are 27 and dog ages are 28', () => {
    const result = getHumanAge(27, 28);

    expect(result)
      .toEqual([2, 2]);
  });

  test('should return 3 if cat ages are 28 and dog ages are 29', () => {
    const result = getHumanAge(28, 29);

    expect(result)
      .toEqual([3, 3]);
  });

  test('should return fixed result if cat and dog ages are 100', () => {
    const result = getHumanAge(100, 100);

    expect(result)
      .toEqual([21, 17]);
  });

  /* eslint-disable */
  test('should return an array with two elements if there is thirt integer in the function', () => {
    const result = getHumanAge(69, 69, 69);

    expect(result)
      .toEqual([13, 11]);
  });
  /* eslint-enable */

  test('should return zeroes if cat and dog ages are negative', () => {
    const result = getHumanAge(-10, -10);

    expect(result)
      .toEqual([0, 0]);
  });
});
