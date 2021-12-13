describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('catAge and dogAge should return [0,0] if humanAge is 0 for both', () => {
    expect(getHumanAge(0,0))
    .toEqual([0, 0])
  })

  test('animalAge should return [2,0] if humanAge is 24 for catAgeAge and 0 for dogAge', () => {
    expect(getHumanAge(25,0))
    .toEqual([2, 0])
  })

  test(`animalAge should return [0,4] if humanAge is 0 for catAge and 34 for dogAge`, () => {
    expect(getHumanAge(0,34))
    .toEqual([0, 4])
  })

  test('animalAge should return [1,1] if humanAge is 15 for both', () => {
    expect(getHumanAge(15,15))
    .toEqual([1, 1])
  })

  test(`animalAge should return [2,2] if humanAge is 24 for cat and 26 for dog`, () => {
    expect(getHumanAge(24,26))
    .toEqual([2, 2])
  })

  test(`animalAge should return [3,3] if humanAge is 28 for cat and 29 
  for dog`, () => {
    expect(getHumanAge(28,29))
    .toEqual([3,3])
  })

  test('animalAge should return [18,15] when humanAge = 90 for both', () => {
    expect(getHumanAge(90,90))
    .toEqual([18,15])
  })

});