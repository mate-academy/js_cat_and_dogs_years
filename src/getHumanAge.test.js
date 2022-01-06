'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] if both parameters = 0', () => {
    const actual = getHumanAge(0, 0);
    const expected = [0, 0];

    expect(actual)
      .toStrictEqual(expected);
  });

  test('should work with valid parameters', () => {
    const actual = getHumanAge(28, 29);
    const expected = [3, 3];

    expect(actual)
      .toStrictEqual(expected);
  });

  // I know that this test is basically useless, I just wanted to try it.
  test('should return an array', () => {
    expect(Array.isArray(getHumanAge())).toBe(true);
  });
});
