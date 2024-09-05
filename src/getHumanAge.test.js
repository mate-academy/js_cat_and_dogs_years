'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] for ages 0 and 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] for ages less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

 test('should return correct human age with different cat and dog ages', () => {
    expect(getHumanAge(15, 24)).toEqual([1, 2]);
  });

  test('should return NaN if the dog\'s age is a string', () => {
    expect(getHumanAge(15, 'string')).toEqual([1, NaN]);
  });

  test('should return NaN if the cat\'s age is a string', () => {
    expect(getHumanAge('string', 15)).toEqual([NaN, 1]);
  });

  test('should return NaN if dog and cat ages are not passed', () => {
    expect(getHumanAge()).toEqual([NaN, NaN]);
  });
});
