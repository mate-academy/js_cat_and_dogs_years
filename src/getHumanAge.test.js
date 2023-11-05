'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('Should return [0, 0], when dogs and cat years are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('Should return [0, 0], when dogs and cat years are below 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('Should return [1, 1], when dogs and cat years are 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('Should return [1, 1], when dogs and cat years are 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('Should return [2, 2], when dogs and cat years are 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('Should return [2, 2], when dogs and cat years are 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('Should return [3, 2], when dogs and cat years are 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('Should return [3, 3], when dogs and cat years are 29', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('Should return [21, 17], when dogs and cat years are 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
