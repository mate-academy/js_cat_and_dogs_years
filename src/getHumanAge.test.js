'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should correctly convert cat and dog ages to human ages', () => {
    expect(getHumanAge(0, 0)).toStrictEqual([0, 0]);

    expect(getHumanAge(15, 15)).toStrictEqual([1, 1]);

    expect(getHumanAge(23, 23)).toStrictEqual([1, 1]);

    expect(getHumanAge(24, 24)).toStrictEqual([2, 2]);

    expect(getHumanAge(27, 27)).toStrictEqual([2, 2]);

    expect(getHumanAge(28, 28)).toStrictEqual([3, 2]);

    expect(getHumanAge(100, 100)).toStrictEqual([21, 17]);
  });
});
