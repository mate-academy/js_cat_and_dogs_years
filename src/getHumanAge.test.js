'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 for both if input values equals 0', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('should return 0 for both if input values < 15', () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test('should return 1 for both if input values equals 15 ', () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test('should return 1 for both if input values equals 23', () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  test('should return 2 for both if input values equals 24', () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test('should return 2 for bothif input values equals 27', () => {
    const result = getHumanAge(27, 27);

    expect(result).toEqual([2, 2]);
  });

  test('should return 3 for cats and 2 for dogs'
  + 'if input values equals 28', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test('should return 3 for both if input values equals 29', () => {
    const result = getHumanAge(29, 29);

    expect(result).toEqual([3, 3]);
  });

  test('should return 21 for cats and 17 for dogs'
  + 'if input values equals 100', () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
