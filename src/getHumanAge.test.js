'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be array', () => {
    expect.arrayContaining(getHumanAge(15, 15));
  });

  test('should be array with length 2', () => {
    expect(getHumanAge(15, 15))
      .toHaveLength(2);
  });

  test('should return 0 values with 0 arguments', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 0 values with arguments less '
  + 'than 15 in both cases', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return 1 values with arguments more or '
  + 'equal than 15 in both cases', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1 values with arguments less '
  + 'than 24 in both cases', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 values with arguments more or '
  + 'equal than 24 in both cases', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2 values with arguments 27 and 28', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should return 3 values with arguments 28 and 29', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return 4 values with arguments 32 and 34', () => {
    expect(getHumanAge(32, 34))
      .toEqual([4, 4]);
  });

  test('should return 21 and 17 values with arguments 100', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
