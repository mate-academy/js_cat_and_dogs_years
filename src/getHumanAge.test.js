'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(14, 50))
      .toBeInstanceOf(Array);
  });

  test('should return zero human ages for zero pet ages', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return zero human ages for pet ages < 15', () => {
    expect(getHumanAge(14, 2))
      .toEqual([0, 0]);
  });

  test('should return right ages for pet ages < 28', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return different ages for cat and dog above 28 years', () => {
    expect(getHumanAge(32, 32))
      .toEqual([4, 3]);
  });

  test('should work with big ages', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
