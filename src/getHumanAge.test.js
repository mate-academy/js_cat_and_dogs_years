'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared as a function', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    const result = getHumanAge();
    expect(result).toBeInstanceOf(Array);
  });

  test.each([
    [[0, 0], [0, 0]],
    [[14, 14], [0, 0]],
    [[15, 15], [1, 1]],
    [[23, 23], [1, 1]],
    [[24, 24], [2, 2]],
    [[27, 27], [2, 2]],
    [[28, 28], [3, 2]],
    [[100, 100], [21, 17]],
  ])('should return %j for ages %j', ([catAge, dogAge], expected) => {
    const result = getHumanAge(catAge, dogAge);
    expect(result).toStrictEqual(expected);
  });
});
