'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if cat`s and dog`s ages are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return 0 if cat`s and dog`s ages are less than 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return 1'
    + 'if cat`s and dog`s ages are equal or more than 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1'
    + 'if cat`s and dog`s ages are equal or more than 15', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return 2'
    + 'if cat`s and dog`s ages'
    + 'are equal or more than 15 + next 9 years', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2'
    + 'if cat`s and dog`s ages'
    + 'are equal or more than 15 + next 9 years', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return 3'
    + 'in human`s age for cat`s age'
    + 'if cat is equal or more than 28 years.'
    + 'Should return 2 in human`s age'
    + 'for dog`s age if dog is equal 28 years', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return 21'
    + 'in human`s age for cat`s age'
    + 'and 17 for dog`s age if inputs values are 100 and 100', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
