'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  // --- Cats ---
  test('cat: younger than 15 years → 0 human years', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(10, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 0)).toEqual([0, 0]);
  });

  test('cat: exactly 15 years → 1 human year', () => {
    expect(getHumanAge(15, 0)).toEqual([1, 0]);
  });

  test('cat: from 15 to <24 years → still 1 human year', () => {
    expect(getHumanAge(20, 0)).toEqual([1, 0]);
    expect(getHumanAge(23, 0)).toEqual([1, 0]);
  });

  test('cat: exactly 24 years → 2 human years', () => {
    expect(getHumanAge(24, 0)).toEqual([2, 0]);
  });

  test('cat: every 4 years after 24 adds +1', () => {
    expect(getHumanAge(28, 0)).toEqual([3, 0]); // +4
    expect(getHumanAge(32, 0)).toEqual([4, 0]); // +8
    expect(getHumanAge(40, 0)).toEqual([6, 0]); // +16
  });

  // --- Dogs ---
  test('dog: younger than 15 years → 0 human years', () => {
    expect(getHumanAge(0, 10)).toEqual([0, 0]);
    expect(getHumanAge(0, 5)).toEqual([0, 0]);
    expect(getHumanAge(0, 14)).toEqual([0, 0]);
  });

  test('dog: exactly 15 years → 1 human year', () => {
    expect(getHumanAge(0, 15)).toEqual([0, 1]);
  });

  test('dog: from 15 to <24 years → still 1 human year', () => {
    expect(getHumanAge(0, 20)).toEqual([0, 1]);
    expect(getHumanAge(0, 23)).toEqual([0, 1]);
  });

  test('dog: exactly 24 years → 2 human years', () => {
    expect(getHumanAge(0, 24)).toEqual([0, 2]);
  });

  test('dog: every 5 years after 24 adds +1', () => {
    expect(getHumanAge(0, 29)).toEqual([0, 3]); // +5
    expect(getHumanAge(0, 34)).toEqual([0, 4]); // +10
    expect(getHumanAge(0, 39)).toEqual([0, 5]); // +15
  });

  // --- All pets ---
  test('both cat and dog', () => {
    expect(getHumanAge(28, 30)).toEqual([3, 3]);
    expect(getHumanAge(40, 40)).toEqual([6, 5]);
  });
});
