'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zero if animalAge < 15', () => {
    expect(getHumanAge(4, 7))
      .toStrictEqual([0, 0]);
  });

  test('should return 1 if animalAge >=15 && animalAge <= 24', () => {
    expect(getHumanAge(15, 18))
      .toStrictEqual([1, 1]);
  });

  test('should return 3 if animalAge = 29', () => {
    expect(getHumanAge(29, 29))
      .toStrictEqual([3, 3]);
  });

  test('should return 7 and 6 if animalAge = 44', () => {
    expect(getHumanAge(44, 44))
      .toStrictEqual([7, 6]);
  });

  test('should return 11 and 9 if animalAge = 63', () => {
    expect(getHumanAge(63, 63))
      .toStrictEqual([11, 9]);
  });
});
