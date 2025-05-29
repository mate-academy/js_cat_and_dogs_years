'use strict';

const getHumanAge = require('./getHumanAge');

describe('getHumanAge', () => {
  it('should be a function', () => {
    expect(typeof getHumanAge).toBe('function');
  });

  it('returns [0, 0] for [0, 0]', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it('returns [0, 0] for [14, 14]', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it('returns [1, 1] for [15, 15]', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it('returns [1, 1] for [23, 23]', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  it('returns [2, 2] for [24, 24]', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it('returns [2, 2] for [27, 27]', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  it('returns [3, 2] for [28, 28]', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  it('returns [21, 17] for [100, 100]', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
