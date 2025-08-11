'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if age < 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 if if age is in the range from 15 to 24', () => {
    expect(getHumanAge(15, 23)).toEqual([1, 1]);
  });

  test(`should increase by 1 for every 5 years for dogs 
    and 4 for cats, when over 24 years of human age`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return correct years with large numbers', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
