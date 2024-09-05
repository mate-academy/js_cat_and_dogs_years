'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared and be a function', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test(`should convert 0 cat years and 0 dog 
    years to human years correctly`, () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test(`should convert 14 cat years and 14 dog
     years to human years correctly`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test(`should convert 15 cat years and 15 dog
     years to human years correctly`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test(`should convert 23 cat years and 23 dog
     years to human years correctly`, () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test(`should convert 24 cat years and 24 dog
     years to human years correctly`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test(`should convert 27 cat years and 27 dog
     years to human years correctly`, () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test(`should convert 28 cat years and 28 dog
     years to human years correctly`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`should convert 100 cat years and 100 dog
     years to human years correctly`, () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
