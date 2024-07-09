const add = require("./calculator");

test("Test runs", () => {
  const inputsOutputs = [["", 0]];

  inputsOutputs.forEach(([input, expectedOutput]) => {
    let result = add(input);
    expect(result).toBe(expectedOutput);
  });
});
