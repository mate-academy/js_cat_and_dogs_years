function getHumanAge(catAge, dogAge) {
  const convertCat = (age) => {
    if (age < 15) return 0;
    if (age < 24) return 1;
    return 2 + Math.floor((age - 24) / 4);
  };

  const convertDog = (age) => {
    if (age < 15) return 0;
    if (age < 24) return 1;
    return 2 + Math.floor((age - 24) / 5);
  };

  return [convertCat(catAge), convertDog(dogAge)];
}

module.exports = getHumanAge;
