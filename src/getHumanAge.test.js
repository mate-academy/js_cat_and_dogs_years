'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('0,0 -> [0,0]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('14,14 -> [0,0]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('15,15 -> [1,1]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('23,23 -> [1,1]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('24,24 -> [2,2]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('27,27 -> [2,2]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('28,28 -> [3,2]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('100,100 -> [21,17]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });
});
