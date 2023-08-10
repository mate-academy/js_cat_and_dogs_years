'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0', () => {
    expect(getHumanAge(0, 0))
      .toStrictEqual([0, 0]);
  });

  test('boundary values check, minimum age returned', () => {
    expect(getHumanAge(15, 15))
      .toStrictEqual([1, 1]);
  });

  test('boundary values check, minimum age returned', () => {
    expect(getHumanAge(14, 14))
      .toStrictEqual([0, 0]);
  });

  test('boundary values check, should return 3 and 2', () => {
    expect(getHumanAge(28, 28))
      .toStrictEqual([3, 2]);
  });

  test('boundary values check, should return 3 and 3', () => {
    expect(getHumanAge(29, 29))
      .toStrictEqual([3, 3]);
  });

  test('should return result of four-digit calculations', () => {
    expect(getHumanAge(1000, 1000))
      .toStrictEqual([246, 197]);
  });
});
