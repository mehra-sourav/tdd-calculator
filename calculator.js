const getNumbersFromString = (string) => {
  const delimiterPattern = /\d+/g;
  //   const delimiterPattern = /\/\/\[(.*?)\]/;
  return string.match(delimiterPattern)?.map((num) => Number(num)) ?? [];
};

const add = (stringInput) => {
  if (stringInput === "") {
    return 0;
  }

  let inputNumbers = getNumbersFromString(stringInput);
  let result = inputNumbers.reduce((sum, curr) => sum + Number(curr), 0);

  return result;
};

module.exports = add;
