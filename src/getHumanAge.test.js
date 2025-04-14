'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should convert 0 cat and 0 dog years to human ages correctly', () => {
    const humanAges = getHumanAge(0, 0);

    expect(humanAges).toEqual([0, 0]);
  });

  test('should convert 10 cat and 10 dog years to human ages correctly', () => {
    const humanAges = getHumanAge(10, 10);

    expect(humanAges).toEqual([0, 0]);
  });

  test('should convert 14 cat and 14 dog yaers to human ages correctly', () => {
    const humanAges = getHumanAge(14, 14);

    expect(humanAges).toEqual([0, 0]);
  });

  test('should convert 15 cat and 15 dog yaers to human ages correctly', () => {
    const humanAges = getHumanAge(15, 15);

    expect(humanAges).toEqual([1, 1]);
  });

  test('should convert 20 cat and 20 dog yaers to human ages correctly', () => {
    const humanAges = getHumanAge(20, 20);

    expect(humanAges).toEqual([1, 1]);
  });

  test('should convert 23 cat and 23 dog yaers to human ages correctly', () => {
    const humanAges = getHumanAge(23, 23);

    expect(humanAges).toEqual([1, 1]);
  });

  test('should convert 24 cat and 24 dog yaers to human ages correctly', () => {
    const humanAges = getHumanAge(24, 24);

    expect(humanAges).toEqual([2, 2]);
  });

  test('should convert 24 cat and 24 dog yaers to human ages correctly', () => {
    const humanAges = getHumanAge(24, 24);

    expect(humanAges).toEqual([2, 2]);
  });

  test('should convert 24 cat and 24 dog yaers to human ages correctly', () => {
    const humanAges = getHumanAge(24, 24);

    expect(humanAges).toEqual([2, 2]);
  });

  test('should convert 28 cat and 28 dog yaers to human ages correctly', () => {
    const humanAges = getHumanAge(28, 28);

    expect(humanAges).toEqual([3, 2]);
  });

  test('should convert 29 cat and 29 dog yaers to human ages correctly', () => {
    const humanAges = getHumanAge(29, 29);

    expect(humanAges).toEqual([3, 3]);
  });

  test('should convert 36 cat and 36 dog yaers to human ages correctly', () => {
    const humanAges = getHumanAge(36, 36);

    expect(humanAges).toEqual([5, 4]);
  });

  test('should convert 78 cat and 96 dog yaers to human ages correctly', () => {
    const humanAges = getHumanAge(78, 96);

    expect(humanAges).toEqual([15, 16]);
  });
});
