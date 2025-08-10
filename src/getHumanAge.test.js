'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test.each([
    [0, 0, [0, 0]],
    [14, 14, [0, 0]],
    [15, 15, [1, 1]],
    [23, 23, [1, 1]],
    [24, 24, [2, 2]],
    [27, 27, [2, 2]],
    [28, 28, [3, 2]],
    [100, 100, [21, 17]],
    [16, 20, [1, 1]],
    [24, 15, [2, 1]],
    [15, 28, [1, 2]],
  ])('should return correct human ages for catAge=%i, dogAge=%i',
    (catAge, dogAge, expected) => {
      expect(getHumanAge(catAge, dogAge)).toEqual(expected);
    });
});
