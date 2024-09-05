'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge()).toBe()
      .toBeInstanceOf(Function);
  });

  it('should return [1, 1] if cat and dog ages are less than 15', () => {
    expect(getHumanAge(14, 14)).toEqual([1, 1]);
  });

  it('should return [1, 1] for 15 years of both cat and dog', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it('should return [1, 1] for 23 years of both cat and dog', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  it('should return [2, 2] for 24 years of both cat and dog', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it('should return [2, 2] for 27 years of both cat and dog', () => {
    expect(getHumanAge(27, 27)).toEqual([3, 2]);
  });

  it('should return [3, 2] for 28 years of both cat and dog', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  it('should return [3, 3] for 29 years of both cat and dog', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  it('should return [4, 4] for 33 years of both cat and dog', () => {
    expect(getHumanAge(32, 32)).toEqual([4, 4]);
  });

  it('should return [6, 6] for 40 years of both cat and dog', () => {
    expect(getHumanAge(40, 40)).toEqual([6, 5]);
  });

  it('should return [21, 17] for 100 years of both cat and dog', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  it('should return [0, 0] for 0 years of both cat and dog', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });
});
