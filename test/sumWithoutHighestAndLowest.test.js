const sumWithoutHighestAndLowest = require("../src/sumWithoutHighestAndLowest.js");

// test cases
describe("Normal Cases", () => {
  it("should work when all numbers in array are positive", () => {
    expect(sumWithoutHighestAndLowest([1, 2, 3, 4, 5])).toEqual(9);
  });

  it("should work when all numbers in array are negative", () => {
    expect(sumWithoutHighestAndLowest([-10, -9, -8, -7, -6])).toEqual(-24);
  });

  it("should work when array contains mix of positive and negative numbers", () => {
    expect(sumWithoutHighestAndLowest([10, -20, 30, -40, 50])).toEqual(20);
  });

  it("should work when array contains repeated numbers that are not highest or lowest", () => {
    expect(sumWithoutHighestAndLowest([12, 12, 15, 11, 12])).toEqual(36);
  });

  it("should ignore repeated highest numbers", () => {
    expect(sumWithoutHighestAndLowest([1, 2, 3, 10, 10, 10])).toEqual(5);
  });

  it("should ignore repeated lowest numbers", () => {
    expect(sumWithoutHighestAndLowest([1, 1, 1, 2, 4, 10])).toEqual(6);
  });

  it("should ignore repeated highest and lowest numbers", () => {
    expect(sumWithoutHighestAndLowest([1, 1, 1, 5, 8, 10, 10, 10])).toEqual(13);
  });
});

describe("Edge Cases", () => {
  it("should return 0 with 2 or fewer elements", () => {
    expect(sumWithoutHighestAndLowest([])).toEqual(0);
    expect(sumWithoutHighestAndLowest([1])).toEqual(0);
    expect(sumWithoutHighestAndLowest([1, 2])).toEqual(0);
    expect(sumWithoutHighestAndLowest([1, 1])).toEqual(0);
  });
});
