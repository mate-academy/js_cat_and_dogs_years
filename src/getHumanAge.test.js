'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  it('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  it('should return 0 for cat and dog when they are < 15 years old', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it('should return 1 for cat and dog when they are 15 years old', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it('should return 2 for cat and dog when they are 23 years old', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  it('should return 2 for cat and dog when they are 24 years old', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it('should return 3 for cat and dog when they are 27 years old', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  it('should return 4 for cat and 3 for dog when they are 28 years old', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  it('should return 4 for cat and dog when they are 29 years old', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });

  it('should return 4 for cat and dog when they are 29 years old', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
