const getHumanAge = require('./getHumanAge');

describe('getHumanAge', () => {
  test('returns [0, 0] for catAge and dogAge of 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('returns [0, 0] for catAge and dogAge of 14', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('returns [1, 1] for catAge and dogAge of 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('returns [1, 1] for catAge and dogAge of 23', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('returns [2, 2] for catAge and dogAge of 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('returns [2, 2] for catAge and dogAge of 27', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('returns [3, 2] for catAge and dogAge of 28', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('returns [21, 17] for catAge and dogAge of 100', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
