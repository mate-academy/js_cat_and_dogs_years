'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  it('should return correct value if catAge === 0 && dogAge === 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  it('should return correct value if catAge && dogAge < 15', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it('should return correct value if 15 <= catAge && dogAge <= 28', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it('should work correctly for boundary values ', () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it('should return correct value if 28 < catAge && dogAge', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
