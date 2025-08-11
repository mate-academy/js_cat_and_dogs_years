'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0', () => {
    const result = getHumanAge(-3, -3);

    expect(result).toEqual([0, 0]);
  });

  test('should return [21, 17]', () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });

  test('should return [3, 2]', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });
});
