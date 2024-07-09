const add = require("./calculator");

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
