'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('For empty input function return array with 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('First 14 or less dog years give 0 human year', () => {
    expect(getHumanAge(0, 14)).toEqual([0, 0]);
  });

  test('First 15 dog years give 1 human year', () => {
    expect(getHumanAge(0, 15)).toEqual([0, 1]);
  });

  test('the next 9 **dog** years give 1 more **human** year', () => {
    expect(getHumanAge(0, 24)).toEqual([0, 2]);
  });

  test('every 5 next **dog** years give 1 extra **human** year', () => {
    expect(getHumanAge(0, 34)).toEqual([0, 4]);
  });

  test('First 14 or less **cat** years give 0 **human** year', () => {
    expect(getHumanAge(14, 0)).toEqual([0, 0]);
  });

  test('First 15 **cat** years give 1 **human** year', () => {
    expect(getHumanAge(15, 0)).toEqual([1, 0]);
  });

  test('the next 9 **cat** years give 1 more **human** year', () => {
    expect(getHumanAge(24, 0)).toEqual([2, 0]);
  });

  test('every 4 next **cat** years give 1 extra **human** year', () => {
    expect(getHumanAge(32, 0)).toEqual([4, 0]);
  });
});
