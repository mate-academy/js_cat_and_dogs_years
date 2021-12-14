describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return [0,0] if inputs are (0,0)', () => {
    expect(getHumanAge(0,0))
    .toEqual([0, 0])
  })

  test('should return [2,0] if inputs are (25,0)', () => {
    expect(getHumanAge(25,0))
    .toEqual([2, 0])
  })

  test(`should return [0,4] if inputs are (0,34)`, () => {
    expect(getHumanAge(0,34))
    .toEqual([0, 4])
  })

  test('should return [1,1] if inputs are (15,15)', () => {
    expect(getHumanAge(15,15))
    .toEqual([1, 1])
  })

  test(`should return [2,2] if if inputs are (24,26)`, () => {
    expect(getHumanAge(24,26))
    .toEqual([2, 2])
  })

  test(`should return [3,3] if inputs are (28,29) `, () => {
    expect(getHumanAge(28,29))
    .toEqual([3,3])
  })

  test('should return [18,15] if inputs are (90,90)', () => {
    expect(getHumanAge(90,90))
    .toEqual([18,15])
  })

});
