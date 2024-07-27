const getNumbersFromString = (string) => {
    const delimiterPattern = /-?\d+/g;
    return string.match(delimiterPattern)?.map((num) => Number(num)) ?? [];
};

const checkDelimiter = (string, delimiter) => {
  const delimiterPattern = /\/\/(.)/g;
  const match = string.match(delimiterPattern);

  return match?.[0] === `//${delimiter}`;
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

  let result;
  
  // If string contains '@' as delimiter
  if (checkDelimiter(stringInput, '@')) {
    let oddSum = 0, evenSum = 0;

    inputNumbers.forEach((num, idx) => {
      if (num % 2 === 0) {
        evenSum += num;
      }
      else {
        oddSum += num;
      }
    });

    result = oddSum - evenSum;
  }
  else {
      result = inputNumbers.reduce((sum, curr) => {
        return sum + (curr > 1000 ? 0 : Number(curr));
      }, 0);
  }

  return result;
};

module.exports = { add, getNumbersFromString };
