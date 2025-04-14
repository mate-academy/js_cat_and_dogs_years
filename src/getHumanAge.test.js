'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(typeof(getHumanAge(0, 0)))
      .toEqual('object');
  });

  test('should return result [0, 0] if cat years = 0 and dog years = 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return result [1, 1] if cat years = 15 and dog years = 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return result [2, 2] if cat years = 27 and dog years = 27', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return result [3, 2] if cat years = 28 and dog years = 28', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return result [100, 100] if cat years = 21 and dog years = 17', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });

  test('should return result [3, 100] if cat years = 28 and dog years = 17', () => {
    expect(getHumanAge(28, 100))
      .toEqual([3, 17]);
  });
});
