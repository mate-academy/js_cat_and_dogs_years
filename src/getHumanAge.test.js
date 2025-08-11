'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] if CatAge is < 15 and DogAge is < 15', () => {
    expect(getHumanAge(10, 9)).toEqual([0, 0]);
  });

  test('should return [1, 1] if CatAge 15 to 24 and DogAge 15 to 24', () => {
    expect(getHumanAge(15, 23)).toEqual([1, 1]);
  });

  test('should return [3, 3] if CatAge equals 28 and DogAge equals 29', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('should return [0, 0] if CatAge is 0 and DogAge is 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [1, 0] if CatAge is 15 and DogAge is 0', () => {
    expect(getHumanAge(15, 0)).toEqual([1, 0]);
  });

  test('should return [0, 2] if CatAge is 0 and DogAge is 24', () => {
    expect(getHumanAge(0, 24)).toEqual([0, 2]);
  });

  test('should return [13, 7] if CatAge is 70 and DogAge is 49', () => {
    expect(getHumanAge(70, 49)).toEqual([13, 7]);
  });
});
