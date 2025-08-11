'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  test('should have length 2', () => {
    expect(getHumanAge(1, 1)).toHaveLength(2);
  });

  test('should return [0,0] if animals ages less than 15', () => {
    expect(getHumanAge(10, 10)).toEqual([0, 0]);
  });

  test('should return [1,1] if animals ages greater than 15,'
    + 'but less 24', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return [2,2] if animals ages greater than 24,'
    + 'but less 28 for cats and 29 for dogs', () => {
    expect(getHumanAge(27, 28)).toEqual([2, 2]);
  });

  test('should return 1 year for every 4 years for cats after '
    + '28 years of age and 1 year for every 5 years 29 years', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });
});
