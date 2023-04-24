'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should be 0 human year if animalAge < 15', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);

    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should be plus 1 year if animalAge >= 15 && animalAge < 24', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);

    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should be catAge +1 every 4 years and dogAGe +1 every 5 years', () => {
    expect(getHumanAge(50, 50))
      .toEqual([8, 7]);

    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
