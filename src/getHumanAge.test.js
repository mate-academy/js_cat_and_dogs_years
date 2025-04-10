'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0], when ages inputs are zero', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [0, 0], when ages inputs are less then 15', () => {
    expect(getHumanAge(8, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for ages between 15 and 23', () => {
    expect(getHumanAge(15, 23)).toEqual([1, 1]);
  });

  test('should return [2, 2] for cats age between 23 and 27'
   + 'and for dogs between 23 and 28', () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  test('should return [3, 3] for cats higher then 27'
   + 'and for dogs higher then 28', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });
});
