'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return correct human age for given dog age', () => {
    const result = getHumanAge(5, 5);

    expect(result).toEqual([0, 0]);
  });

  test('should return 0 for non-positive dog age', () => {
    const result = getHumanAge(3, -1);

    expect(result).toEqual([0, 0]);
  });
});
