'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('HumanAge for cat', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('HumanAge for cat', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('HumanAge for cat', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });
});
