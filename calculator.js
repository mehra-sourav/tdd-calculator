const getNumbersFromString = (string) => {
  const delimiterPattern = /-?\d+/g;
  return string.match(delimiterPattern)?.map((num) => Number(num)) ?? [];
};

const add = (stringInput) => {
  if (stringInput === "") {
    return 0;
  }

  let inputNumbers = getNumbersFromString(stringInput);
  let negativeNumbers = inputNumbers.filter((num) => num < 0);

  if (negativeNumbers.length > 0) {
    let errorMsg = negativeNumbers.reduce((msg, num) => `${msg}${num},`, "");
    throw `Negatives numbers are not allowed: ${errorMsg.substring(
      0,
      errorMsg.length - 1
    )}`;
  }

  let result = inputNumbers.reduce((sum, curr) => {
    return sum + (curr > 1000 ? 0 : Number(curr));
  }, 0);

  return result;
};

module.exports = { add, getNumbersFromString };
