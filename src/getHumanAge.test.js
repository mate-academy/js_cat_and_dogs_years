'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  it('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it('Cat and dog ages are both 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it('Should return [0, 0] when cat and dog ages are both 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it('Should return [1, 1] when cat and dog ages are both 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it('Should return [1, 1] when cat and dog ages are both 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  it('Should return [2, 2] when cat and dog ages are both 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it('Should return [2, 2] when cat and dog ages are both 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  it('Should return [3, 2] when cat age is 28 and dog age is 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  it('Should return [21, 17] when cat age is 100 and dog age is 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
