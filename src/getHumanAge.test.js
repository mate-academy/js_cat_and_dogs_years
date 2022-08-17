'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zero human age', () => {
    expect(getHumanAge(10, 10))
      .toEqual([0, 0]);
  });

  test('should return one human age', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return one and two human age', () => {
    expect(getHumanAge(23, 26))
      .toEqual([1, 2]);
  });

  test('should return two and three human age', () => {
    expect(getHumanAge(25, 29))
      .toEqual([2, 3]);
  });

  test('should return zero human age', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return zero human age', () => {
    expect(getHumanAge(5.5, 5.1))
      .toEqual([0, 0]);
  });

  test('should return zero human age when one of negative number', () => {
    expect(getHumanAge(-1, 5.1))
      .toEqual([0, 0]);
  });
});
