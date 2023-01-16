// 'use strict';
const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });
});

test('Shoud return expected goals whith not rounding', () => {
  const goals = getHumanAge(0, 0);

  expect(goals).toEqual([0, 0]);
});

test('Shoud return 0', () => {
  const goals = getHumanAge(14, 14);

  expect(goals).toEqual([0, 0]);
});

test('Shoud return 1', () => {
  const goals = getHumanAge(23, 23);

  expect(goals).toEqual([1, 1]);
});

test('Shoud return 2', () => {
  const goals = getHumanAge(24, 24);

  expect(goals).toEqual([2, 2]);
});

test('Shoud return round number', () => {
  const goals = getHumanAge(50, 50);

  expect(goals).toEqual([8, 7]);
});



