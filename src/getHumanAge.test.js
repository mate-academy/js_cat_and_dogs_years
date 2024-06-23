/* eslint-disable no-undef */
/* eslint-disable max-len */
'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  it('should be a function', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it('should return [0, 0] for catAge 0 and dogAge 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it('should return [1, 0] for catAge 14 and dogAge 0', () => {
    expect(getHumanAge(14, 0)).toEqual([1, 0]);
  });

  it('should return [1, 1] for catAge 15 and dogAge 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it('should return [2, 1] for catAge 23 and dogAge 15', () => {
    expect(getHumanAge(23, 15)).toEqual([2, 1]);
  });

  it('should return [2, 2] for catAge 24 and dogAge 20', () => {
    expect(getHumanAge(24, 20)).toEqual([2, 2]);
  });

  it('should return [3, 3] for catAge 28 and dogAge 25', () => {
    expect(getHumanAge(28, 25)).toEqual([3, 3]);
  });

  it('should return [10, 5] for catAge 60 and dogAge 40', () => {
    expect(getHumanAge(60, 40)).toEqual([10, 5]);
  });

  it('should return [0, 0] for catAge 0 and dogAge 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it('should return [0, 1] for catAge 0 and dogAge 14', () => {
    expect(getHumanAge(0, 14)).toEqual([0, 1]);
  });

  it('should return [1, 1] for catAge 15 and dogAge 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it('should return [1, 2] for catAge 15 and dogAge 24', () => {
    expect(getHumanAge(15, 24)).toEqual([1, 2]);
  });

  it('should return [2, 2] for catAge 20 and dogAge 25', () => {
    expect(getHumanAge(20, 25)).toEqual([2, 2]);
  });

  it('should return [3, 3] for catAge 25 and dogAge 30', () => {
    expect(getHumanAge(25, 30)).toEqual([3, 3]);
  });

  it('should return [10, 8] for catAge 60 and dogAge 50', () => {
    expect(getHumanAge(60, 50)).toEqual([10, 8]);
  });

  it('should return [0, 0] for negative catAge and dogAge', () => {
    expect(getHumanAge(-5, -10)).toEqual([0, 0]);
  });
});
