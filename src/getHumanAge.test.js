'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should give zero human years if animal < 15', () => {
    const res = getHumanAge(14, 14);

    expect(res).toEqual([0, 0]);
  });

  test('should give one human years if 15 <= animal >= 23', () => {
    const res = getHumanAge(15, 17);

    expect(res).toEqual([1, 1]);
  });

  test('should give two human years if animal = 27', () => {
    const res = getHumanAge(27, 27);

    expect(res).toEqual([2, 2]);
  });
});
