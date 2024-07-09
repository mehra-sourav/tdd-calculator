const { add, getNumbersFromString } = require("./calculator");

test("Evaluates empty string to 0", () => {
  let result = add("");
  expect(result).toBe(0);
});

test("Evaluates string with comma separated numbers", () => {
  const inputsOutputs = [
    ["2", 2],
    ["2,3", 5],
    ["2,3,4", 9],
    ["2,3,4,5", 14],
  ];

  inputsOutputs.forEach(([input, expectedOutput]) => {
    let result = add(input);
    expect(result).toBe(expectedOutput);
  });
});

test("Evaluates string with new line between numbers", () => {
  const inputsOutputs = [
    ["1\n2", 3],
    ["1\n2,3", 6],
    ["1\n2,3\n4", 10],
    ["1\n2,3\n4,5", 15],
  ];

  inputsOutputs.forEach(([input, expectedOutput]) => {
    let result = add(input);
    expect(result).toBe(expectedOutput);
  });
});

test("Evaluates string with custom delimiters between numbers", () => {
  const inputsOutputs = [
    ["//;\n1;2", 3],
    ["//;\n1;2;3", 6],
    ["//;\n1;2;3;4", 10],
    ["//;\n1;2;3;4;5", 15],
  ];

  inputsOutputs.forEach(([input, expectedOutput]) => {
    let result = add(input);
    expect(result).toBe(expectedOutput);
  });
});

test("Throws an exception for negative numbers", () => {
  const inputsOutputs = [
    "-2",
    "-2,-3",
    "-2,-3,-4",
    "-2,-3,-4,-5",
    "-1\n-2",
    "-1\n-2,-3",
    "-1\n-2,-3\n-4",
    "-1\n-2,-3\n-4,-5",
    "//;\n-1;-2",
    "//;\n-1;-2;-3",
    "//;\n-1;-2;-3;-4",
    "//;\n-1;-2;-3;-4;-5",
  ];

  inputsOutputs.forEach((input) => {
    let formattedNegativeNumbers = getNumbersFromString(input)?.reduce(
      (msg, num) => `${msg}${num},`,
      ""
    );
    expect(() => {
      add(input);
    }).toThrowError(
      `Negatives numbers are not allowed: ${formattedNegativeNumbers.substring(
        0,
        formattedNegativeNumbers.length - 1
      )}`
    );
  });
});

test("Ignores numbers greater than 1000", () => {
  const inputsOutputs = [
    ["2,1100,3,4,5,1230", 14],
    ["1\n1200,2,1050,3\n1001\n4,5", 15],
    ["1\n1050,2,3\n1001,4", 10],
  ];

  inputsOutputs.forEach(([input, expectedOutput]) => {
    let result = add(input);
    expect(result).toBe(expectedOutput);
  });
});

test("Evaluates string with custom delimiters of any length between numbers", () => {
  const inputsOutputs = [
    ["//[***]\n1***2", 3],
    ["//[***]\n1***2***3", 6],
    ["//[***]\n1***2***3***4", 10],
    ["//[***]\n1***2***3***4***5", 15],
  ];

  inputsOutputs.forEach(([input, expectedOutput]) => {
    let result = add(input);
    expect(result).toBe(expectedOutput);
  });
});
