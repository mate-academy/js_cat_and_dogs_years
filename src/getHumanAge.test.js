'use strict';

const { getHumanAge } = require("./getHumanAge");

describe ('getHumanAge', () => {

  test('shoud be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
});

test('should be declared', () => {
expect(getHumanAge)
    .toBeInstanceOf(function);
});
test('should convert cat and dog years to human years correctly for small age', () => {
  expect(getHumanAge(15, 15)).toEqual([1, 1]);
  expect(getHumanAge(24, 24)).toEqual([2, 2]);
});
test('should convert cat and dog years to human years correctly for large ages', () => {
  expect(getHumanAge(28, 28)).toEqual([3, 3]);
  expect(getHumanAge(32, 32)).toEqual([4, 3]);
});
test('should convert cat and dog years to human years for mixed ages', () => {
  expect(getHumanAge(15, 24)).toEqual([1, 2]);
  expect(getHumanAge(24, 15)).toEqual([2, 1]);
});
test('should convert cat and dog years to human years with very low or high ages', () => {
  expect(getHumanAge(0, 0)).toEqual([0, 0]);
  expect(getHumanAge(100, 100)).toEqual([29, 19]);
});