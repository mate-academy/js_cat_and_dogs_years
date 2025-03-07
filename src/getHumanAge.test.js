'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return 0 when both cat and dog age is 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return 0 when both cat and dog age is less than 15', () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  test('should add 1 year when dog and cat age is 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should add 1 year when dog and cat age is between 16 and 24', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should add 2 years when cat and dog age is 25', () => {
    expect(getHumanAge(25, 25)).toEqual([2, 2]);
  });

  test('should add 2 years when cat and dog age is between 26 and 28', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('should add 3 years and 2 years when cat and dog age is 29', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should add 3 years when cat and dog age is 30', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });
});
