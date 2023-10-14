'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  it('should return the correct human ages for cat and dog', () => {

    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  it('should handle cat ages correctly', () => {
    expect(getHumanAge(10, 0)).toEqual([0, 0]);
    expect(getHumanAge(15, 0)).toEqual([1, 0]);
    expect(getHumanAge(24, 0)).toEqual([2, 0]);
    expect(getHumanAge(30, 0)).toEqual([3, 0]);
  });

  it('should handle dog ages correctly', () => {
    expect(getHumanAge(0, 10)).toEqual([0, 0]);
    expect(getHumanAge(0, 15)).toEqual([0, 1]);
    expect(getHumanAge(0, 24)).toEqual([0, 2]);
    expect(getHumanAge(0, 30)).toEqual([0, 3]);
    expect(getHumanAge(0, 31)).toEqual([0, 3]);
    expect(getHumanAge(0, 34)).toEqual([0, 4]);
  });
});