'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be returned [0, 0] for date (0, 0)', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should be returned [0, 0] for date (14, 14)', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should be returned [1, 1] for date (15, 15)', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should be returned [1, 1] for date (23, 23)', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should be returned [2, 2] for date (24, 24)', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should be returned [2, 2] for date (27, 27)', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should be returned [3, 2] for date (28, 28)', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should be returned [4, 3] for date (33, 33)', () => {
    expect(getHumanAge(33, 33))
      .toEqual([4, 3]);
  });

  test('should be returned [4, 4] for date (34, 34)', () => {
    expect(getHumanAge(34, 34))
      .toEqual([4, 4]);
  });

  test('should be returned [5, 4] for date (38, 38)', () => {
    expect(getHumanAge(38, 38))
      .toEqual([5, 4]);
  });

  test('should be returned [27, 17] for date (100, 100)', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });

  test('should be returned [58, 58] for date (250, 305)', () => {
    expect(getHumanAge(250, 305))
      .toEqual([58, 58]);
  });

  test('should be an array', () => {
    expect(getHumanAge())
      .toBeInstanceOf(Array);
  });
});
