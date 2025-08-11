'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('Should be an array', () => {
    expect(getHumanAge()).toBeInstanceOf(Array);
  });

  test('Should return [0, 0] if the age of the cat and dog is 0 years', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('Should return [0, 0] if the age of the cat and dog is less than 15 years', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('Should return [1, 1] if both dog and cat are 15 years old', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('Should return [1, 1] if the age of the cat and dog is 23 years', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('Should return [2, 2] if the age of the cat and dog is 24 years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('Should return [3, 2] if the age of the cat and dog is 28 years', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('Should return [21, 17] if the age of the cat and dog is 100 years', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
