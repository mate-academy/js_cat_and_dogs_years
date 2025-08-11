'use strict';

const { getCoinCombination } = require('./getCoinCombination');

describe('getCoinCombination', () => {
  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(
    'should return [1, 0, 0, 0] when the input is 1 (minimum boundary)',
    () => {
      expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    });

  it(
    'should return [0, 0, 0, 4] when the input is 100 (upper boundary)',
    () => {
      expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
    });

  it(
    'should return [0, 0, 0, 1] when the input is 25',
    () => {
      expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
    });

  it(
    'should return [0, 0, 1, 1] when the input is 35',
    () => {
      expect(getCoinCombination(35)).toEqual([0, 0, 1, 1]);
    });

  it(
    'should return [4, 0, 1, 2] when the input is 64',
    () => {
      expect(getCoinCombination(64)).toEqual([4, 0, 1, 2]);
    });

  it(
    'should return [0, 0, 0, 0] when the input is 0',
    () => {
      expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
    });

  it(
    'should return [1, 1, 0, 0] when the input is 6',
    () => {
      expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    });

  it(
    'should return [2, 1, 1, 0] when the input is 17',
    () => {
      expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
    });

  it(
    'should return [4, 0, 0, 1] when the input is 29',
    () => {
      expect(getCoinCombination(29)).toEqual([4, 0, 0, 1]);
    });

  it(
    'should return [0, 1, 0, 1] when the input is 30',
    () => {
      expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
    });
});

