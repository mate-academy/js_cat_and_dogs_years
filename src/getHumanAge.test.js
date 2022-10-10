'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  it('should return correct value if catAge && dogAge < 15', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it('should return correct value if 15 <= catAge && dogAge <= 28', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  it('should return correct value if 28 < catAge && dogAge', () => {
    expect(getHumanAge(70, 70)).toEqual([13, 11]);
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
