/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should correct calculate newely born age of cat and dog', () => {
    const result = getHumanAge(0, 0);

    expect(result)
      .toEqual([0, 0]);
  });

  test('should correct calculate 1 human old pet', () => {
    const result = getHumanAge(15, 15);

    expect(result)
      .toEqual([1, 1]);
  });

  test('should correct calculate 2 human old pet', () => {
    const result = getHumanAge(24, 24);

    expect(result)
      .toEqual([2, 2]);
  });

  test('should correct calculate an extra lifes of pet', () => {
    const result = getHumanAge(100, 100);

    expect(result)
      .toEqual([21, 17]);
  });

  test('should correct discard the remainder', () => {
    const result = getHumanAge(23, 23);

    expect(result)
      .toEqual([1, 1]);
  });
});
