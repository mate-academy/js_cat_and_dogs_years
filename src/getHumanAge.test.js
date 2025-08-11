'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
  
  test('Should return 0 if age < 15', () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });
  
  test('Should return 1 if age >= 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });
  
  test('Should return 2 if age >= 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });
  
  test('Should return [3, 2] if age = 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });
  
  test('Should return 3 if age > 28', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });
  
  test('Should return [21,17] if age = 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});