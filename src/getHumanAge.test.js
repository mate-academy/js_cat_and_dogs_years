'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  it('should be with expected result', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it('should be with expected result', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it('should be with expected result', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it('should be with expected result', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it('should be with expected result', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  it('should be with expected result', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
