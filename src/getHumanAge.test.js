'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('shold return zero if cat or dog age < 14', () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test('should return same age if ', () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test('shoul return bigger age for dogs if argument === 28', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test('should return correct age on big integers', () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
