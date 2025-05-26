'use strict';

const { getHumanAge } = require('./getHumanAge');

describe('getHumanAge', () => {
  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should return [0, 0] for ages below the first threshold', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('should return [1, 1] for ages exactly at the first threshold', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  // eslint-disable-next-line max-len
  test('should return correct values for ages just above the second threshold', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('should correctly convert large animal ages', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
    expect(getHumanAge(1000, 1000)).toEqual([246, 197]);
  });

  // eslint-disable-next-line max-len
  test('should return correct values when cat and dog ages differ significantly', () => {
    expect(getHumanAge(60, 20)).toEqual([11, 1]);
    expect(getHumanAge(35, 40)).toEqual([4, 5]);
    expect(getHumanAge(50, 55)).toEqual([8, 8]);
  });
});
