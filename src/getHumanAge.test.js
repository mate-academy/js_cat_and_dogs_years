'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
  
  test('animals ages less than 15', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });
  
  test('animals ages between 15 and 24', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });
  
  test('animals ages between 25 and 28', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });
  
  test('cat age is 28, dog age is 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });
  
  test('animals ages more than 28', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
