'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('when input 0 values, must return 0', () => {
    const result = getHumanAge(0, 0);

    expect(result)
      .toEqual([0, 0]);
  });

  test('when input 15 values, must return 1', () => {
    const result = getHumanAge(15, 15);

    expect(result)
      .toEqual([1, 1]);
  });

  test('when input 24 values, must return 2', () => {
    const result = getHumanAge(24, 24);

    expect(result)
      .toEqual([2, 2]);
  });

  test('when input 100 values, must return [21, 17]', () => {
    const result = getHumanAge(100, 100);

    expect(result)
      .toEqual([21, 17]);
  });
});
