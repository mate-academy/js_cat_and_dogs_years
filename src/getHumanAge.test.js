'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge function', () => {
  test('should return [0, 0] for 0 cat years and 0 dog years', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] for 14 cat years and 14 dog years', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for 15 cat years and 15 dog years', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] for 23 cat years and 23 dog years', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for 24 cat years and 24 dog years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] for 27 cat years and 27 dog years', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should return [3, 2] for 28 cat years and 28 dog years', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return [21, 17] for 100 cat years and 100 dog years', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return [0, 17] for 0 cat years and 100 dog years', () => {
    expect(getHumanAge(0, 100)).toEqual([0, 17]);
  });

  test('should return [21, 0] for 100 cat years and 0 dog years', () => {
    expect(getHumanAge(100, 0)).toEqual([21, 0]);
  });

  test('should return [21, 197] for 100 cat years and 1000 dog years', () => {
    expect(getHumanAge(100, 1000)).toEqual([21, 197]);
  });

  test('should return [246, 17] for 1000 cat years and 100 dog years', () => {
    expect(getHumanAge(1000, 100)).toEqual([246, 17]);
  });
});
