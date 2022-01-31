/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] when cat and dogs years are equal to 0', () => {
    const result = getHumanAge(0, 0);

    expect(result)
      .toEqual([0, 0]);
  });

  test('should return [1, 1] when cat and dogs years are equal to 15', () => {
    const result = getHumanAge(15, 15);

    expect(result)
      .toEqual([1, 1]);
  });

  test('should return [2, 2] when cat and dogs years are equal to 24', () => {
    const result = getHumanAge(24, 24);

    expect(result)
      .toEqual([2, 2]);
  });

  test('should return [21, 17] when cat and dogs years are equal to 100', () => {
    const result = getHumanAge(100, 100);

    expect(result)
      .toEqual([21, 17]);
  });
});
