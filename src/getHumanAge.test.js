'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('the age of both is equal 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('the age of both is equal 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('the age of both is equal 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('the age of both is equal 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('the age of both is equal 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('the age of both is equal 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('the age of both is equal 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('the age of both is equal 29', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  test('the age of both is equal 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
