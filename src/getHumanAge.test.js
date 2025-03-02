/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] if both ages are below 15', () => {
    const res = getHumanAge(14, 14);

    expect(res).toEqual([0, 0]);
  });

  test('should return [1, 1] if both ages are below 24 and more than 14', () => {
    const res = getHumanAge(23, 23);

    expect(res).toEqual([1, 1]);
  });

  test('should return [2, 2] if both ages are more than 23 and below 28 for cat and below 29 for dog', () => {
    const res = getHumanAge(27, 28);

    expect(res).toEqual([2, 2]);
  });

  test('should return true different age for dog and cat', () => {
    const res = getHumanAge(100, 100);

    expect(res).toEqual([21, 17]);
  });
});
