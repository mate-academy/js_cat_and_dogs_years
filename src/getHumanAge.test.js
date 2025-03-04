'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
});

describe('Invalid input tests', () => {
  test('should handle negative numbers', () => {
    const action = getHumanAge(-5, -5);

    expect(action).toEqual([0, 0]);
  });

  test('should handle decimal numbers', () => {
    const action = getHumanAge(18.5, 18.5);

    expect(action).toEqual([1, 1]);
  });
});

describe('Different age combinations', () => {
  test('should return zeros before 1st year of life', () => {
    const action = getHumanAge(5, 5);

    expect(action).toEqual([0, 0]);
  });

  test('should return equal results on 1st year of life', () => {
    const action = getHumanAge(15, 15);

    expect(action).toEqual([1, 1]);
  });

  test('should return equal results on 2d year of life', () => {
    const action = getHumanAge(24, 24);

    expect(action).toEqual([2, 2]);
  });

  test('should return correct results above 3d year of life', () => {
    const action = getHumanAge(100, 100);

    expect(action[0]).toBeGreaterThan(action[1]);
  });
});
