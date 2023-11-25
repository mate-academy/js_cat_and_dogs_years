'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] if age of a cat is 0 and a dog age is 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] if age of a cat is 8 and a dog age is 8', () => {
    expect(getHumanAge(8, 8)).toEqual([0, 0]);
  });

  test('should return [0, 0] if age of a cat is 14 and a dog age is 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] if age of a cat is 15 and a dog age is 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] if age of a cat is 19 and a dog age is 19', () => {
    expect(getHumanAge(19, 19)).toEqual([1, 1]);
  });

  test('should return [1, 1] if age of a cat is 23 and a dog age is 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] if age of a cat is 24 and a dog age is 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] if age of a cat is 27 and a dog age is 28', () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  test('should return [3, 3] if age of a cat is 28 and a dog age is 29', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should return [3, 3] if age of a cat is 31 and a dog age is 33', () => {
    expect(getHumanAge(31, 33)).toEqual([3, 3]);
  });

  test('should return [4, 4] if age of a cat is 32 and a dog age is 34', () => {
    expect(getHumanAge(32, 34)).toEqual([4, 4]);
  });

  test('should return [21, 17] if age of a cat and a dog is 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
