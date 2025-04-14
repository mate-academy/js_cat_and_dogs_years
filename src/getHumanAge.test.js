'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge())
      .toBeInstanceOf(Array);
  });

  test('should return a numbers inside of array ', () => {
    const result = getHumanAge(4, 4);

    expect(typeof result[0]).toBe('number');
    expect(typeof result[1]).toBe('number');
  });

  test('should have length 2 for input 2 args', () => {
    expect(getHumanAge(1, 13))
      .toHaveLength(2);
  });

  test('should return 0, 0 for 0, 0 inputs', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return [1, 1] for inputs 15, 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return [21, 17] for inputs 100, 100', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
