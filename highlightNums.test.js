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
  it("should return null for an array containing non-numeric types", () => {
    expect(highlightNumsRefactored([1, "two", 3])).toBeNull(); // Mixed types
    expect(highlightNumsRefactored([1, null, 3])).toBeNull(); // Null included
    expect(highlightNumsRefactored(["one", "two", "three"])).toBeNull(); // All strings
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
  it("should return null for an array containing non-numeric types", () => {
    expect(highlightNums([1, "two", 3])).toBeNull(); // Mixed types
    expect(highlightNums([1, null, 3])).toBeNull(); // Null included
    expect(highlightNums(["one", "two", "three"])).toBeNull(); // All strings
  });
});
