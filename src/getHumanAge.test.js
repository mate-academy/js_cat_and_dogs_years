'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] if CatAge = 0 and DogAge = 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] if CatAge and DogAge < 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] if CatAge and DogAge === 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [2, 2] for catAge = 24 and dogAge = 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [4, 3] for catAge = 32 and dogAge = 32', () => {
    expect(getHumanAge(32, 32)).toEqual([4, 3]);
  });

  test('should return [21, 17] for catAge = 100 and dogAge = 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
