    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(20, 20)).toBeInstanceOf(Array);
  });

  test('should return 0 when age is 0', () => {
    expect(getHumanAge(0, 0)).toEqual([0, 0]);
  });

  test('should return 1 when age is 15', () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  test('should return 0 when age is <15', () => {
    expect(getHumanAge(12, 12)).toEqual([0, 0]);
  });

  test('should return integer values for non-integer ages', () => {
    expect(getHumanAge(15.1, 15.1)).toEqual([1, 1]);
  });

  test('should return 1 when age is >=15 and <24', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('should return 2 when age is 24', () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  test('should return 2 when cat age is >=24 and <28', () => {
    expect(getHumanAge(27, 15)).toEqual([2, 1]);
  });

  test('should return 3 when cat age is 28', () => {
    expect(getHumanAge(28, 15)).toEqual([3, 1]);
  });

  test('should return 2 when dog age is >=15 and <29', () => {
    expect(getHumanAge(15, 28)).toEqual([1, 2]);
  });

  test('should return 3 when dog age is 29', () => {
    expect(getHumanAge(15, 29)).toEqual([1, 3]);
  });

  test('should return expected values when cat age is >=28', () => {
    expect(getHumanAge(40, 15)).toEqual([6, 1]);
  });

  test('should return expected values when dog age is >=29', () => {
    expect(getHumanAge(15, 39)).toEqual([1, 5]);
  });
});

