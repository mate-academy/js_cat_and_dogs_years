'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 humanAge, if animalAge = 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 0 humanAge, if animalAge < 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return 1 humanAge, if animalAge = 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1 humanAge, if animalAge < 24', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 humanAge, if animalAge = 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2 humanAge, if animalAge < 28', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test(`should return 3 (for cat converting) 
  and 2 (for dog converting) human years, if catAge = 28
  and dogAge < 29`, () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test(`The function should return 1 extra human year if catAge > 28 
  for every 4 next cat years and if dogAge >= 29 for 
  every 5 next dog years`, () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
