/* eslint-disable padded-blocks */
/* eslint-disable padding-line-between-statements */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should correctly convert cat and dog ages to human years', () => {
    const result1 = getHumanAge(14, 14);
    expect(result1).toEqual([0, 0]);

    const result2 = getHumanAge(15, 15);
    expect(result2).toEqual([1, 1]);

    const result3 = getHumanAge(23, 23);
    expect(result3).toEqual([1, 1]);

    const result4 = getHumanAge(24, 24);
    expect(result4).toEqual([2, 2]);

    const result5 = getHumanAge(27, 28);
    expect(result5).toEqual([2, 2]);

    const result6 = getHumanAge(28, 29);
    expect(result6).toEqual([3, 3]);

    const result7 = getHumanAge(32, 34);
    expect(result7).toEqual([4, 4]);

    const result8 = getHumanAge(66, 68);
    expect(result8).toEqual([12, 10]);

    const result9 = getHumanAge(96, 93);
    expect(result9).toEqual([20, 15]);

    const result10 = getHumanAge(100, 98);
    expect(result10).toEqual([21, 16]);

    const result11 = getHumanAge(120, 120);
    expect(result11).toEqual([26, 21]);
  });

  test('should handle invalid input', () => {
    const resultNegative1 = getHumanAge(-5, 8);
    expect(resultNegative1).toEqual([0, 0]);

    const resultNegative2 = getHumanAge(8, -7);
    expect(resultNegative2).toEqual([0, 0]);

    const resultNegative3 = getHumanAge(0, 0);
    expect(resultNegative3).toEqual([0, 0]);

    const resultNegative4 = getHumanAge('cat', 15);
    expect(resultNegative4).toEqual([NaN, 1]);

    const resultNegative5 = getHumanAge(15, 'dog');
    expect(resultNegative5).toEqual([1, NaN]);

    const resultNegative6 = getHumanAge(15, true);
    expect(resultNegative6).toEqual([1, 0]);

    const resultNegative7 = getHumanAge(14.5, 28.8);
    expect(resultNegative7).toEqual([0, 2]);

  });
});
