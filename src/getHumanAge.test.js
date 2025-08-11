'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if AnimalAge is < 15', () => {
    expect(getHumanAge(10, 9))
      .toEqual([0, 0]);
  });

  test('should return 1 if AnimalAge is ranged in 15 to 24', () => {
    expect(getHumanAge(15, 23))
      .toEqual([1, 1]);
  });

  test('should return 2 if CatAge equals 24 and DogAge equals 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2 if CatAge equals 27 and DogAge equals 28', () => {
    expect(getHumanAge(27, 28))
      .toEqual([2, 2]);
  });

  test('should return 3 if CatAge equals 28 and DogAge equals 29', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return 3 if CatAge equals 31 and DogAge equals 32', () => {
    expect(getHumanAge(31, 32))
      .toEqual([3, 3]);
  });
});
