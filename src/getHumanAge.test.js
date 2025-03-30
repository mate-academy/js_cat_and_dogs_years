'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return 0 if the inputs are 0', () => {
    const ages = getHumanAge(0, 0);

    expect(ages)
      .toEqual([0, 0]);
  });

  test('should return 0 if the inputs are less than 15', () => {
    const ages = getHumanAge(14, 14);

    expect(ages)
      .toEqual([0, 0]);
  });

  test('should return 1 if the inputs equal 15', () => {
    const ages = getHumanAge(15, 15);

    expect(ages)
      .toEqual([1, 1]);
  });

  test('should return 1 if the inputs more than 15 and less than 24', () => {
    const ages = getHumanAge(23, 23);

    expect(ages)
      .toEqual([1, 1]);
  });

  test('should return 2 if the inputs equal 24', () => {
    const ages = getHumanAge(24, 24);

    expect(ages)
      .toEqual([2, 2]);
  });

  test('should return 2 if the inputs more than 24 and less than 28', () => {
    const ages = getHumanAge(26, 26);

    expect(ages)
      .toEqual([2, 2]);
  });

  test('should add a year for every 4 years for a cat after 24 years', () => {
    const ages = getHumanAge(28, 28);

    expect(ages)
      .toEqual([3, 2]);
  });

  test('should add a year for every 5 years for a dog after 24 years', () => {
    const ages = getHumanAge(29, 29);

    expect(ages)
      .toEqual([3, 3]);
  });

  test('should return the right output', () => {
    const ages = getHumanAge(100, 100);

    expect(ages)
      .toEqual([21, 17]);
  });
});
