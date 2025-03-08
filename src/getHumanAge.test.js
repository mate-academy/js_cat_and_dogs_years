'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 when animalAge is 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return 0 when animalAge is less than 15', () => {
    expect(getHumanAge(13, 14)).toEqual([0, 0]);
  });

  test('should return 1 when animalAge is exactly 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return correct human years for animalAge between 16 and 23', () => {
    expect(getHumanAge(17, 20)).toEqual([1, 1]);
  });

  test('should return 2 when animalAge is 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return correct human years for animalAge between 25 and 27', () => {
    expect(getHumanAge(26, 26)).toEqual([2, 2]);
  });

  test('should return correct human years when animalAge are over 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should return correct human years for very high animalAge values', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test('should return correct human years for different animalAge', () => {
    expect(getHumanAge(24, 30)).toEqual([2, 3]);
  });
});

