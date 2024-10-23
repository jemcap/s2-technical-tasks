const highlightNumsRefactored = require("./highlightNums");
const highlightNums = require("./highlightNums");

describe("highlightNumsRefactored function", () => {
  it("should group numbers based on their multiples", () => {
    const numArray = highlightNumsRefactored([
      1, 3, 5, 6, 10, 12, 15, 18, 20, 24, 30, 35, 45, 60,
    ]);
    const expectedOutput = `divisible by 3: 3,6,12,15,18,24,30,45,60
    divisible by 5: 5,10,15,20,30,35,45,60
    divisible by 3 and 5: 15,30,45,60`;
    expect(numArray).toEqual(expectedOutput);
  });
});

describe("highlightNums function", () => {
  it("should group numbers based on their multiples", () => {
    const numArray = highlightNums([
      1, 3, 5, 6, 10, 12, 15, 18, 20, 24, 30, 35, 45, 60,
    ]);
    const expectedOutput = `divisible by 3: 3,6,12,15,18,24,30,45,60
    divisible by 5: 5,10,15,20,30,35,45,60
    divisible by 3 and 5: 15,30,45,60`;

    expect(numArray).toEqual(expectedOutput);
  });
});
