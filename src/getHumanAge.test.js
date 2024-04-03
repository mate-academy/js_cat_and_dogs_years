'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
});

test('should be with expected results', () => {
  expect(getHumanAge(0, 0)).toEqual([0, 0]);
});

test('should be with expected results', () => {
  expect(getHumanAge(14, 14)).toEqual([0, 0]);
});

test('should be with expected results', () => {
  expect(getHumanAge(15, 15)).toEqual([1, 1]);
});

test('should be with expected results', () => {
  expect(getHumanAge(23, 23)).toEqual([1, 1]);
});

test('should be with expected results', () => {
  expect(getHumanAge(24, 24)).toEqual([2, 2]);
});

test('should be with expected results', () => {
  expect(getHumanAge(27, 27)).toEqual([2, 2]);
});

test('should be with expected results', () => {
  expect(getHumanAge(28, 28)).toEqual([3, 2]);
});

test('should be with expected results', () => {
  expect(getHumanAge(100, 100)).toEqual([21, 17]);
});
