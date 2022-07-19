'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an object', () => {
    expect(typeof getHumanAge(0,0))
      .toBe('object');
  });

  test('should return values [0,0] with unspecified arguments', () => {
    expect(getHumanAge()).toEqual([0,0])
  });

  test('should return [0, 0] values if ages are 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0] values if ages are 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] values if ages are 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [1, 1] values if ages are 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] values  if ages are 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return [2, 2] values if ages are 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('catToHuman is [3], dogToHuman is [2] if ages are 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('catToHuman is [3], dogToHuman is [3] if ages are 29', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('catToHuman is [4], dogToHuman is [3] if ages are 32', () => {
    expect(getHumanAge(32, 32)).toEqual([4, 3]);
  });

  test('catToHuman is [4], dogToHuman is [4] if ages are 34', () => {
    expect(getHumanAge(34, 34)).toEqual([4, 4]);
  });

  test('catToHuman is [21], dogToHuman is [17] if ages are 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
} )
