'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 human years if animal age less then 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return 1 human year if animal age less then 24', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 2 years if animal years - 27 for the cat, '
  + 'and 28 for the dog', () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  test('should return 3 years if animal years more than 28 for the cat, '
  + 'and 29 for the dog', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  test('100 animal years is equal for 21 human - for the cat, '
  + 'and 17 - for the dog', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
