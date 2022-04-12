'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be an object', () => {
    expect(typeof getHumanAge(15, 16))
      .toEqual('object');
  });

  test(`should replace 15 full cat and dog years with 1 human years`, () => {
    expect(getHumanAge(15, 17)).toEqual([1, 1]);
  });

  test(`should replace 24 full cat and dog years with 2 human years`, () => {
    expect(getHumanAge(24, 26)).toEqual([2, 2]);
  });

  test(`should replace 29 full cat years with 3 human years`, () => {
    expect(getHumanAge(29, 26)).toEqual([3, 2]);
  });

  test(`should replace 30 full dog years with 3 human years`, () => {
    expect(getHumanAge(29, 30)).toEqual([3, 3]);
  });

  test(`should replace every 5 next full dog years
  and 4 full cat years with 1 human year`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  test(`should replace from 0 to 14 dog and cat years 
  with 0 human years`, () => {
    expect(getHumanAge(0, 5)).toEqual([0, 0]);
  });

  test(`should return NaN if there is empty array`, () => {
    expect(getHumanAge()).toEqual([NaN, NaN]);
  });
});
