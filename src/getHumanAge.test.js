'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should integer, () => {
    const [cat, dog] = getHumanAge(54, 54);

    expect(Number.isInteger(cat)).toBe(true);
    expect(Number.isInteger(dog)).toBe(true);
  });

  test('should be 0 if animal age < 15', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);

    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should be 1 if 15 <= animal age < 24', () => {
    expect(getHumanAge(16, 16))
      .toEqual([1, 1]);

    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should be correct result', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);

    expect(getHumanAge(54, 54))
      .toEqual([9, 8]);

    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);

    expect(getHumanAge(37, 48))
      .toEqual([5, 6]);
  });
});
