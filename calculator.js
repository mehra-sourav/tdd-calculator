const add = (stringInput) => {
  if (stringInput === "") {
    return 0;
  }

  let inputNumbers = stringInput.split(",");
  let result = inputNumbers.reduce((sum, curr) => sum + Number(curr), 0);

  return result;
};

module.exports = add;
