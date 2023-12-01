'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0, 0] for catAge=0 and dogAge=0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it('should return [0, 0] for catAge=14 and dogAge=14', function() {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it('should return [1, 1] for catAge=15 and dogAge=15', function() {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it('should return [2, 2] for catAge=24 and dogAge=24', function() {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it('should return [3, 2] for catAge=28 and dogAge=28', function() {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  it('should return [21, 17] for catAge=100 and dogAge=100', function() {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
