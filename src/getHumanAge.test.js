'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should return an array with two elements', () => {
    const result = getHumanAge(2, 3);

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toEqual(2);
  });

  test('should return [0,0] for catAge and dogAge < 1', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(0.5, 0.2)).toEqual([0, 0]);
  });

  test('should return correct human ages for catAge and dogAge', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(24, 30)).toEqual([2, 3]);
  });
});
