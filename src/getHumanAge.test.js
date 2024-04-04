'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
});

describe('getHumanAge', () => {
  test('should return 0 for cat and dog when they are 0 years old', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });
});

describe('getHumanAge', () => {
  test('should return 0 for cat and dog when they are 14 years old', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });
});

describe('getHumanAge', () => {
  test('should return 1 for cat and dog when they are 15 years old', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });
});

describe('getHumanAge', () => {
  test('should return 1 for cat and dog when they are 23 years old', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });
});

describe('getHumanAge', () => {
  test('should return 2 for cat and dog when they are 24 years old', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });
});

describe('getHumanAge', () => {
  test('should return 2 for cat and dog when they are 27 years old', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });
});

describe('getHumanAge', () => {
  test('should return 3 for cats and 2 for dogs when they are 14 years old',
   () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });
});

describe('getHumanAge', () => {
  test('should return 21 for cats and 17 for dogs when they are 100 years old',
   () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
