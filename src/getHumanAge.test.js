'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`should return 0 human years when catAge = 0, dogAge = 0 `, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should return 0 human years when catAge = 8, dogAge = 8 `, () => {
    expect(getHumanAge(8, 8)).toEqual([0, 0]);
  });

  test(`should return 0 human years when catAge = 14, dogAge = 14 `, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test(`should return 1 human year when catAge = 15, dogAge = 15`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should return 1 human year when catAge = 16, dogAge = 16`, () => {
    expect(getHumanAge(16, 16)).toEqual([1, 1]);
  });

  test(`should return 1 human year when catAge = 20, dogAge = 20`, () => {
    expect(getHumanAge(20, 20)).toEqual([1, 1]);
  });

  test(`should return 1 human year when catAge = 23, dogAge = 23`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test(`should return 2 human years when catAge = 24, dogAge = 24`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should return 2 human years when catAge = 25, dogAge = 25`, () => {
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  test(`should return 2 human years when catAge = 27, dogAge = 28`, () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  test(`should return 3 human years when catAge = 28, dogAge = 29`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test(`should return 3 human years when catAge = 29, dogAge = 30`, () => {
    expect(getHumanAge(29, 30)).toEqual([3, 3]);
  });

  test(`should return 8 human years when catAge = 50`, () => {
    expect(getHumanAge(50, 0)).toEqual([8, 0]);
  });

  test(`should return 7 human years when dogAge = 50`, () => {
    expect(getHumanAge(0, 50)).toEqual([0, 7]);
  });

  test(`should return 21 human years when catAge = 100`, () => {
    expect(getHumanAge(100, 0)).toEqual([21, 0]);
  });

  test(`should return 17 human years when dogAge = 100`, () => {
    expect(getHumanAge(0, 100)).toEqual([0, 17]);
  });
});