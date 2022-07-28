/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should return correct cat and dog ages for the first 14 human age', () => {
    const result = getHumanAge(14, 14);

    expect(result).toEqual([0, 0]);
  });

  test('should correctly calculate the first year for cats and dogs', () => {
    const firstResult = getHumanAge(15, 15);
    const secondResult = getHumanAge(23, 23);

    expect(firstResult).toEqual([1, 1]);
    expect(secondResult).toEqual([1, 1]);
  });

  test('should correctly calculate the second year for cats and dogs', () => {
    const firstResult = getHumanAge(24, 24);
    const secondResult = getHumanAge(27, 28);

    expect(firstResult).toEqual([2, 2]);
    expect(secondResult).toEqual([2, 2]);
  });

  test('should correctly calculate the third year for cats and dogs', () => {
    const firstResult = getHumanAge(28, 29);
    const secondResult = getHumanAge(31, 33);

    expect(firstResult).toEqual([3, 3]);
    expect(secondResult).toEqual([3, 3]);
  });

  test('should correctly calculate the fourth year for cats and dogs', () => {
    const firstResult = getHumanAge(32, 34);
    const secondResult = getHumanAge(35, 38);

    expect(firstResult).toEqual([4, 4]);
    expect(secondResult).toEqual([4, 4]);
  });

  test('should correctly calculate the fifth year for cats and dogs', () => {
    const result = getHumanAge(36, 39);

    expect(result).toEqual([5, 5]);
  });

  test('correct work for not whole digits', () => {
    const result = getHumanAge(100.7, 100.5);

    expect(result).toEqual([21, 17]);
  });

  test('correct work for zeros', () => {
    const result = getHumanAge(0, 0);

    expect(result).toEqual([0, 0]);
  });

  test('correct work for empty arguments', () => {
    const result = getHumanAge();

    expect(result).toEqual([0, 0]);
  });
});
