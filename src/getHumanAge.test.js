'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return array as a result', () => {
    const result = getHumanAge(0, 0);

    expect(result).toBeInstanceOf(Array);
  });

  test('should return result with 2 values', () => {
    const result = getHumanAge(100, 100);

    expect(result).toHaveLength(2);
  });

  test('should return [0, 0] if catAge <= 14 and dogAge <= 14', () => {
    const result = getHumanAge(13, 14);

    expect(result).toEqual([0, 0]);
  });

  test('should return whole numbers if catAge = 28 and dogAge = 28', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });
});
