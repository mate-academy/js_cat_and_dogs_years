'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('age 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('age <14,14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('age =15,15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('age =16,16', () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test('age =23,23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('age =24,24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('age =27,27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('age =28,28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('age =100,100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
