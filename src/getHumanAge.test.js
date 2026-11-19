'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  // 0, 0 -> [0, 0]
  test('should return [0, 0] if animal ages are 0', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  // (14, 14) -> [0, 0]
  test('should return [0, 0] if animal ages are 14', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  // (15, 15) -> [1, 1]
  test('should return [1, 1] if animal ages are (15, 15)', () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  // (23, 23) -> [1, 1]
  test('should return [1, 1] if animal ages are (23, 23)', () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  // (24, 24) -> [2, 2]
  test('should return [2, 2] if animal ages are (24, 24)', () => {
    const result = getHumanAge(24, 24);

    expect(result).toEqual([2, 2]);
  });

  // (27, 27) -> [2, 2]
  test('should return [2, 2] if animal ages are (27, 27)', () => {
    const result = getHumanAge(27, 27);

    expect(result).toEqual([2, 2]);
  });

  // (28, 28) -> [3, 2]
  test('should return [3, 2] if animal ages are (28, 28)', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  // (28, 29) -> [3, 3]
  test('should return [3, 3] i1, 1f animal ages are (28, 29)', () => {
    const result = getHumanAge(28, 29);

    expect(result).toEqual([3, 3]);
  });

  // (100, 100) -> [21, 17]
  test('should return [21, 17] if animal ages are (100, 100)', () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
