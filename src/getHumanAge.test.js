'use strict';

describe('getHumanAge', () => {
  const {
    getHumanAge,
  } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  it('should return correct human ages for both cat and dog', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  it('should convert cat years to human years correctly', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 0)).toEqual([0, 0]);
    expect(getHumanAge(15, 0)).toEqual([1, 0]);
    expect(getHumanAge(16, 0)).toEqual([1, 0]);
    expect(getHumanAge(23, 0)).toEqual([1, 0]);
    expect(getHumanAge(24, 0)).toEqual([2, 0]);
    expect(getHumanAge(27, 0)).toEqual([2, 0]);
    expect(getHumanAge(28, 0)).toEqual([3, 0]);
    expect(getHumanAge(30, 0)).toEqual([3, 0]);
    expect(getHumanAge(32, 0)).toEqual([4, 0]);
  });

  it('should convert dog years to human years correctly', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(0, 14)).toEqual([0, 0]);
    expect(getHumanAge(0, 15)).toEqual([0, 1]);
    expect(getHumanAge(0, 16)).toEqual([0, 1]);
    expect(getHumanAge(0, 23)).toEqual([0, 1]);
    expect(getHumanAge(0, 24)).toEqual([0, 2]);
    expect(getHumanAge(0, 25)).toEqual([0, 2]);
    expect(getHumanAge(0, 28)).toEqual([0, 2]);
    expect(getHumanAge(0, 29)).toEqual([0, 3]);
    expect(getHumanAge(0, 30)).toEqual([0, 3]);
    expect(getHumanAge(0, 33)).toEqual([0, 3]);
    expect(getHumanAge(0, 34)).toEqual([0, 4]);
  });
});
