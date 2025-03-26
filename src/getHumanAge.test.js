'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test(`if animalAge equal negative number should return 0 human year`
    , () => {
      expect(getHumanAge(-5, -20)).toEqual([0, 0]);
    });

  test(`if animalAge type is not a number should return NaN`
    , () => {
      expect(getHumanAge('ab', '@!')).toEqual([NaN, NaN]);
    });

  test(`if animalAge equal '0' should return 0 human year`
    , () => {
      expect(getHumanAge(0, 0)).toEqual([0, 0]);
    });

  test(`if animalAge < '15' should return 1 human year`
    , () => {
      expect(getHumanAge(14, 14)).toEqual([0, 0]);
    });

  test(`if animalAge equal '15' should return 1 human year`
    , () => {
      expect(getHumanAge(15, 15)).toEqual([1, 1]);
    });

  test(`if animalAge < '24' should return 1 human year`
    , () => {
      expect(getHumanAge(23, 23)).toEqual([1, 1]);
    });

  test(`if animalAge equal '24' should return 2 human year`
    , () => {
      expect(getHumanAge(24, 24)).toEqual([2, 2]);
    });

  test(`if Cat yearsAge < '28' and Dog years < '28'
  should return 2 human year`
  , () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test(`if Cat yearsAge equal '28' should return 3 human years
  and Dog years < '29' should return 2 human years`
  , () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test(`if Cat yearsAge equal '28' every 4 next cat years should
  give 1 extra human year and if Dog yearsAge equal '29'
  every 5 next dog years should give 1 extra human year`
  , () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
