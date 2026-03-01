'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 for 0 years', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('should return 1 human years for 15 years dogs or cat', () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test('should return next 1 human years for 9 years dogs or cat', () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  test(
    'should return next 1 human years for 4 years cat and 5 years dog',
    () => {
      const result = getHumanAge(100, 100);

      expect(result).toEqual([21, 17]);
    });
});
