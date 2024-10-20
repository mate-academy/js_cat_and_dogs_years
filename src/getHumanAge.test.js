'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [1, 1] if animalAge < first + second', () => {
    expect(getHumanAge(20, 20)).toEqual([1, 1]);
  });

  test('should return [0, 0] if both animal ages are zero', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return [2, 2] if both animals are aged greater'
  + 'than the first and second age brackets combined', () => {
    expect(getHumanAge(26, 26)).toEqual([2, 2]);
  });

  test('should return [3, 3] if both animals have ages greater than'
  + 'the combined first and second age'+
  'brackets and include additional years', () => {
    expect(getHumanAge(29, 29)).toEqual([3, 3]);
  });
});
