'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if the animal age is less than 15', () => {
    let result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);

    result = getHumanAge(-2, 10);

    expect(result).toEqual([0, 0]);
  });

  test('should return 1 if animal age >= 15 and < 24', () => {
    let result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);

    result = getHumanAge(18, 23);

    expect(result).toEqual([1, 1]);
  });

  test('should return 2 if animal age >= 24 and < 28', () => {
    let result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);

    result = getHumanAge(27, 27);

    expect(result).toEqual([2, 2]);
  });

  test('should count 4 years for a cat and 5 years for a dog', () => {
    let result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);

    result = getHumanAge(29, 29);

    expect(result).toEqual([3, 3]);
  });

  test('for old age', () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
