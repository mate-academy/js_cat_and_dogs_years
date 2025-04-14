'use strict';

describe('CatAndDogYears', () => {
  const { CatAndDogYears } = require('./CatAndDogYears');

  test('should be declared', () => {
    expect(CatAndDogYears).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for CatAndDogYears(0, 0)', () => {
    expect(CatAndDogYears(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] for CatAndDogYears(14, 14)', () => {
    expect(CatAndDogYears(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for CatAndDogYears(15, 15)', () => {
    expect(CatAndDogYears(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] for CatAndDogYears(23, 23)', () => {
    expect(CatAndDogYears(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for CatAndDogYears(24, 24)', () => {
    expect(CatAndDogYears(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] for CatAndDogYears(27, 27)', () => {
    expect(CatAndDogYears(27, 27)).toEqual([2, 2]);
  });

  test('should return [3, 2] for CatAndDogYears(28, 28)', () => {
    expect(CatAndDogYears(28, 28)).toEqual([3, 2]);
  });

  test('should return [21, 17] for CatAndDogYears(100, 100)', () => {
    expect(CatAndDogYears(100, 100)).toEqual([21, 17]);
  });

  test('should return correct human years for edge cases', () => {
    expect(CatAndDogYears(16, 16)).toEqual([1, 1]);
    expect(CatAndDogYears(20, 20)).toEqual([1, 1]);
    expect(CatAndDogYears(25, 25)).toEqual([2, 2]);
    expect(CatAndDogYears(30, 30)).toEqual([3, 3]);
    expect(CatAndDogYears(50, 50)).toEqual([8, 7]);
  });
});
