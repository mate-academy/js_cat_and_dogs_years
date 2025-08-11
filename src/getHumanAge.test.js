/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should transform 0 cat and 0 dog lifes to convert 0 cat and 0 dogs lifes', () => {
    const goals = getHumanAge(0, 0);

    expect(goals).toEqual([0, 0]);
  });

  test('should transform 14 cat and 14 dog lifes to convert 0 cat and 0 dogs lifes', () => {
    const goals = getHumanAge(0, 0);

    expect(goals).toEqual([0, 0]);
  });

  test('should transform 15 cat and 15 dog lifes to convert 1 cat and 1 dogs lifes', () => {
    const goals = getHumanAge(15, 15);

    expect(goals).toEqual([1, 1]);
  });

  test('should transform 23 cat and 23 dog lifes to convert 1 cat and 1 dogs lifes', () => {
    const goals = getHumanAge(23, 23);

    expect(goals).toEqual([1, 1]);
  });

  test('should transform 24 cat and 24 dog lifes to convert 2 cat and 2 dogs lifes', () => {
    const goals = getHumanAge(24, 24);

    expect(goals).toEqual([2, 2]);
  });

  test('should transform 27 cat and 27 dog lifes to convert 2 cat and 2 dogs lifes', () => {
    const goals = getHumanAge(27, 27);

    expect(goals).toEqual([2, 2]);
  });

  test('should transform 28 cat and 28 dog lifes to convert 3 cat and 2 dogs lifes', () => {
    const goals = getHumanAge(28, 28);

    expect(goals).toEqual([3, 2]);
  });

  test('should transform 100 cat and 100 dog lifes to convert 21 cat and 17 dogs lifes', () => {
    const goals = getHumanAge(100, 100);

    expect(goals).toEqual([21, 17]);
  });
});
