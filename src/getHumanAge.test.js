'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an Array', () => {
    const result = getHumanAge(1, 2);

    expect(result)
      .toBeInstanceOf(Array);
  });

  test('should return an Array with two elements', () => {
    const result = getHumanAge(1, 2);

    expect(result)
      .toHaveLength(2);
  });

  test('should return zeros, if arguments (0, 0)', () => {
    const result = getHumanAge(0, 0);

    expect(result)
      .toEqual([0, 0]);
  });

  test('should return zeros, if arguments less 15', () => {
    const result = getHumanAge(14, 14);

    expect(result)
      .toEqual([0, 0]);
  });

  test('should return 1, if arguments > 14 and < 24 (low border)', () => {
    const result = getHumanAge(15, 15);

    expect(result)
      .toEqual([1, 1]);
  });

  test('should return 1, if arguments > 14 and < 24 (high border)', () => {
    const result = getHumanAge(23, 23);

    expect(result)
      .toEqual([1, 1]);
  });

  test('should return 1, if arguments > 14 and < 24 (high border)', () => {
    const result = getHumanAge(23, 23);

    expect(result)
      .toEqual([1, 1]);
  });

  test('should return 2, if arguments > 24 and <= 27 (low border)', () => {
    const result = getHumanAge(24, 24);

    expect(result)
      .toEqual([2, 2]);
  });

  test('should return 2, if arguments > 24 and <= 27 (high border)', () => {
    const result = getHumanAge(27, 27);

    expect(result)
      .toEqual([2, 2]);
  });

  test('should return different meaning if arguments > 27 (low border)', () => {
    const result = getHumanAge(28, 28);

    expect(result)
      .toEqual([3, 2]);
  });

  test('should return different meaning if arguments > 27', () => {
    const result = getHumanAge(100, 100);

    expect(result)
      .toEqual([21, 17]);
  });
});
