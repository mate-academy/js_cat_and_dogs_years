'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zero, if value is 0', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('should return zero, if value is less than 15', () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test('should return integer', () => {
    const result = getHumanAge(21, 21);

    expect(result).toEqual([1, 1]);
  });

  test('should calculate both ages correctly', () => {
    const result = getHumanAge(28, 29);

    expect(result).toEqual([3, 3]);
  });
});
