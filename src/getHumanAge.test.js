'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  it('should return an array of two numbers', () => {
    const result = getHumanAge(10, 10);

    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(2);
  });

  it('should return [0, 0] for 0 years', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it('should return 0 for less than 15 years', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it('should return 1 for 15 years', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it('should return 1 for 23 years', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  it('should return 2 for 24 years', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it('should return [2, 2] for 27 years', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  it('should return [3, 2] for 28 years', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  it('should add 1 cat year after every 4 years', () => {
    expect(getHumanAge(31, 0)[0]).toBe(3);
    expect(getHumanAge(32, 0)[0]).toBe(4);
  });

  it('should add 1 dog year after every 5 years', () => {
    expect(getHumanAge(0, 28)[1]).toBe(2);
    expect(getHumanAge(0, 29)[1]).toBe(3);
    expect(getHumanAge(0, 33)[1]).toBe(3);
    expect(getHumanAge(0, 34)[1]).toBe(4);
  });

  it('should return [21, 17] for 100 years', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });

  it('should convert cat and dog ages independently', () => {
    expect(getHumanAge(100, 0)).toEqual([21, 0]);
    expect(getHumanAge(0, 100)).toEqual([0, 17]);
  });

  it('should return only whole numbers', () => {
    const result = getHumanAge(50, 50);

    expect(result.every(Number.isInteger)).toBe(true);
  });
});
