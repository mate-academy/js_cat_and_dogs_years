'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] if arg0 = 0 and arg1 = 0', () => {
    const results = getHumanAge(0, 0);

    expect(results)
      .toEqual([0, 0]);
  });

  test('should return [0, 0] if arg0 = 14 and arg1 = 14', () => {
    const results = getHumanAge(14, 14);

    expect(results)
      .toEqual([0, 0]);
  });

  test('should return [1, 1] if arg0 = 15 and arg1 = 15', () => {
    const results = getHumanAge(15, 15);

    expect(results)
      .toEqual([1, 1]);
  });

  test('should return [1, 1] if arg0 = 23 and arg1 = 23', () => {
    const results = getHumanAge(23, 23);

    expect(results)
      .toEqual([1, 1]);
  });

  test('should return [2, 2] if arg0 = 24 and arg1 = 24', () => {
    const results = getHumanAge(24, 24);

    expect(results)
      .toEqual([2, 2]);
  });

  test('should return [2, 2] if arg0 = 27 and arg1 = 27', () => {
    const results = getHumanAge(27, 27);

    expect(results)
      .toEqual([2, 2]);
  });

  test('should return [3, 2] if arg0 = 28 and arg1 = 28', () => {
    const results = getHumanAge(28, 28);

    expect(results)
      .toEqual([3, 2]);
  });

  /***
  test('should return [6, 5] if arg0 = 40 and arg1 = 40', () => {
    const results = getHumanAge(40, 40);

    expect(results)
      .toEqual([6, 5]);
  });

  test('should return [11, 9] if arg0 = 60 and arg1 = 60', () => {
    const results = getHumanAge(60, 60);

    expect(results)
      .toEqual([11, 9]);
  });
  ***/

  test('should return [21, 17] if arg0 = 100 and arg1 = 100', () => {
    const results = getHumanAge(100, 100);

    expect(results)
      .toEqual([21, 17]);
  });
});
