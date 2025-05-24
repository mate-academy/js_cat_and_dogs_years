 -1,10 +1,61 
'use strict';
describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should be an array', () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  test('should return [0, 0] for ages (0, 0)', () => {
    const result = getHumanAge(0, 0);

    expect(result).toStrictEqual([0, 0]);
  });

  test('should return [0, 0] for ages (14, 14)', () => {
    const result = getHumanAge(14, 14);

    expect(result).toStrictEqual([0, 0]);
  });

  test('should return [1, 1] for ages (15, 15)', () => {
    const result = getHumanAge(15, 15);

    expect(result).toStrictEqual([1, 1]);
  });

  test('should return [1, 1] for ages (23, 23)', () => {
    const result = getHumanAge(23, 23);

    expect(result).toStrictEqual([1, 1]);
  });

  test('should return [2, 2] for ages (24, 24)', () => {
    const result = getHumanAge(24, 24);

    expect(result).toStrictEqual([2, 2]);
  });

  test('should return [2, 2] for ages (27, 27)', () => {
    const result = getHumanAge(27, 27);

    expect(result).toStrictEqual([2, 2]);
  });

  test('should return [3, 2] for ages (28, 28)', () => {
    const result = getHumanAge(28, 28);

    expect(result).toStrictEqual([3, 2]);
  });

  test('should return [21, 17] for ages (100, 100)', () => {
    const result = getHumanAge(100, 100);

    expect(result).toStrictEqual([21, 17]);
  });
});
