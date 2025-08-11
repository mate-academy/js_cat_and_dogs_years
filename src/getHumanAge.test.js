'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('Cat and Dog years are zero', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('Cat and Dog years are less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('Cat and Dog years for human age 1', () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test('Cat and Dog years to cover age 2', () => {
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  test('Cat and Dogs with different years', () => {
    expect(getHumanAge(50, 100)).toEqual([8, 17]);
  });
});
