'use strict';

describe('getHumanAge', () => {
  const {
    getHumanAge,
  } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zeros when human age is between 0-14', () => {
    const result = getHumanAge(14, 0);

    expect(result).toStrictEqual([0, 0]);
  });

  test('should return ones when human age is between 15-23', () => {
    const result = getHumanAge(23, 15);

    expect(result).toStrictEqual([1, 1]);
  });

  test('should return [2, 2] when human age 27, 28', () => {
    const result = getHumanAge(27, 28);

    expect(result).toStrictEqual([2, 2]);
  });

  test('should return [3, 3] when human age 28, 29', () => {
    const result = getHumanAge(28, 29);

    expect(result).toStrictEqual([3, 3]);
  });
});
