'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] if arguments equal (0, 0)', () => {
    const petsAge = getHumanAge(0, 0);

    expect(petsAge)
      .toEqual([0, 0]);
  });

  test('should return [0, 0] if arguments equal (14, 14)', () => {
    const petsAge = getHumanAge(14, 14);

    expect(petsAge)
      .toEqual([0, 0]);
  });

  test('should return [1, 1] if arguments equal (15, 15)', () => {
    const petsAge = getHumanAge(15, 15);

    expect(petsAge)
      .toEqual([1, 1]);
  });

  test('should return [1, 1] if arguments equal (23, 23)', () => {
    const petsAge = getHumanAge(23, 23);

    expect(petsAge)
      .toEqual([1, 1]);
  });

  test('should return [2, 2] if arguments equal (24, 24)', () => {
    const petsAge = getHumanAge(24, 24);

    expect(petsAge)
      .toEqual([2, 2]);
  });

  test('should return [2, 2] if arguments equal (27, 27)', () => {
    const petsAge = getHumanAge(27, 27);

    expect(petsAge)
      .toEqual([2, 2]);
  });

  test('should return [3, 2] if arguments equal (28, 28)', () => {
    const petsAge = getHumanAge(28, 28);

    expect(petsAge)
      .toEqual([3, 2]);
  });

  test('should return [3, 3] if arguments equal (28, 29)', () => {
    const petsAge = getHumanAge(28, 29);

    expect(petsAge)
      .toEqual([3, 3]);
  });

  test('should return [21, 17] if arguments equal (100, 100)', () => {
    const petsAge = getHumanAge(100, 100);

    expect(petsAge)
      .toEqual([21, 17]);
  });
});
