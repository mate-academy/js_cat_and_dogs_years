'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge function', () => {
  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return 0 human age for 0 cat and dog years', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return 0 human age for 14 cat and dog years', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 human age for 15 cat and dog years', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 1 human age for 23 cat and dog years', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 2 human age for 24 cat and dog years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 2 human age for 27 cat and dog years', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test(
    'converts age values for cats and dogs (28) to human (3,2)',
    () => {
      expect(getHumanAge(28, 28)).toEqual([3, 2]);
    }
  );

  test(
    'handles large ages for cats and dogs (100) to human (21,17)',
    () => {
      expect(getHumanAge(100, 100)).toEqual([21, 17]);
    }
  );
});
