'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return correct human age for given dog age', () => {
    const dogAge = 10;
    const humanAge = 0;
    const result = getHumanAge(humanAge, dogAge);

    expect(result).toEqual([0, 0]);
  });

  test('should return 0 for non-positive dog age', () => {
    const dogAge = 0;
    const humanAge = 5;
    const result = getHumanAge(humanAge, dogAge);

    expect(result).toEqual([0, 0]);
  });
});
