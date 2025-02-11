'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('Should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('Should be an array', () => {
    const result = getHumanAge(27, 27);

    expect(result).toBeInstanceOf(Array);
  });

  test('Should have right length', () => {
    const result = getHumanAge(27, 27);

    expect(result).toHaveLength(2);
    expect(result).toEqual([2, 2]);
  });

  test('Should return expected values when dog and cat have zero years', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('Should return expected values when dog and cat years bellow 15', () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test('Should return expected values when dog and cat years is 15', () => {
    const result = getHumanAge(15, 15);

    expect(result).toEqual([1, 1]);
  });

  test('Should return expected values when dog and cat years bellow 24', () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  test(`Should return expected values when dog and cat
    years more than 23`, () => {
    const result = getHumanAge(23, 23);

    expect(result).toEqual([1, 1]);
  });

  test('Should have expected value', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test('Should have expected value', () => {
    const result = getHumanAge(28, 28);

    expect(result).toEqual([3, 2]);
  });

  test('Should have expected value', () => {
    const result = getHumanAge(100, 100);

    expect(result).toEqual([21, 17]);
  });
});
