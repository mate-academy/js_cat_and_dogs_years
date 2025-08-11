'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('return NaN for string input', () => {
    expect(getHumanAge('cat', 'dog'))
      .toEqual([NaN, NaN]);
  });

  test('return NaN for empty values', () => {
    expect(getHumanAge())
      .toEqual([NaN, NaN]);
  });

  test('animalAge age are 0 when both ages are 0', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('animalAge age are 0 when both ages are less than 15', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('animalAge age are 1 when both ages are 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('animalAge age are 1 when both ages are 16', () => {
    expect(getHumanAge(16, 16))
      .toEqual([1, 1]);
  });

  test('animalAge age are 1 when both ages are 23', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('animalAge age are 2 when both ages are 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('animalAge age are 2 when both ages are 25', () => {
    expect(getHumanAge(25, 25))
      .toEqual([2, 2]);
  });

  test('animalAge ages correctly for different ages', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
});
