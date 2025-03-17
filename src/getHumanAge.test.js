'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should return an array ', () => {
    const goals = getHumanAge(0, 0);

    expect(goals).toBeInstanceOf(Array);
  });

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] if arguments equal (0, 0)', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] if arguments equal (14, 14)', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] if arguments equal (15, 15)', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] if arguments equal (23, 23)', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] if arguments equal (24, 24)', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return [2, 2] if arguments equal (27, 28)', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should return [3, 3] if arguments equal (29, 30)', () => {
    expect(getHumanAge(29, 30))
      .toEqual([3, 3]);
  });

  test('should return [3, 3] if arguments equal (31, 33)', () => {
    expect(getHumanAge(31, 33))
      .toEqual([3, 3]);
  });

  test('should return [10, 10] if arguments equal (56, 64)', () => {
    expect(getHumanAge(56, 64))
      .toEqual([10, 10]);
  });

  test('should return [10, 10] if arguments equal (59, 68)', () => {
    expect(getHumanAge(59, 68))
      .toEqual([10, 10]);
  });

  test('should return [3, 7] if arguments equal (30, 50)', () => {
    expect(getHumanAge(30, 50))
      .toEqual([3, 7]);
  });

  test('should return [21, 17] if arguments equal (100, 100)', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
