'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  // below are postive tests for EC and BV test designs
  // including different values=)
  test('should return 0 for cat and dog when input is 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return 0 for cat and dog if they are less than 15 years old',
    () => {
      expect(getHumanAge(14, 14))
        .toEqual([0, 0]);
    });

  test('should return 1 for cat and dog when input is 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return 1 for cat and dog when input is 16', () => {
    expect(getHumanAge(16, 16))
      .toEqual([1, 1]);
  });

  test('should return 2 for cat and dog when input is 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return 2 for cat and dog when input is 25', () => {
    expect(getHumanAge(25, 25))
      .toEqual([2, 2]);
  });

  test('should return 3 for cat and dog when input is 28, 29', () => {
    expect(getHumanAge(28, 29))
      .toEqual([3, 3]);
  });

  test('should return 3 for cat and dog when input is 29, 30', () => {
    expect(getHumanAge(29, 30))
      .toEqual([3, 3]);
  });

  test('should return 4 for cat and dog when input is 32, 35', () => {
    expect(getHumanAge(32, 35))
      .toEqual([4, 4]);
  });

  // below are some negative tests, (hope they check everything) =)
  test('should return NaN for cat and dog when input is symbols, letter',
    () => {
      expect(getHumanAge('A#a', 'A#a'))
        .toEqual([NaN, NaN]);
    });

  test('should return 0 for cat and dog when input is negative fractions',
    () => {
      expect(getHumanAge(-1.2, -1.2))
        .toEqual([0, 0]);
    });

  test('should return 1 for cat and dog when input has more than 2 arguments',
    () => {
      expect(getHumanAge(20, 20, 20))
        .toEqual([1, 1]);
    });

  test('should return NaN for cat and dog when input is blank)', () => {
    expect(getHumanAge())
      .toEqual([NaN, NaN]);
  });

  test('should return valid output for cat and dog when input is big int',
    () => {
      expect(getHumanAge(45345345345345345, 45345345345345345))
        .toEqual([11336336336336332, 9069069069069066]);
    });
});
