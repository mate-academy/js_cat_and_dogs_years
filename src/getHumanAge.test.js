'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should work with zeros', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('should work correct with young animals', () => {
    const result = getHumanAge(10, 10);

    expect(result).toEqual([0, 0]);
  });

  test('should work correct with older animals', () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test('should work correct with old animals', () => {
    const result = getHumanAge(64, 74);

    expect(result).toEqual([12, 12]);
  });
});
