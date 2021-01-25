const firstNonConsecutiveNumber = require("../src/firstNonConsecutiveNumber");

// write test cases to ensure firstNonConsecutiveNumber() works as expected
it("should work with two elements", () => {
  expect(firstNonConsecutiveNumber([1, 3])).toEqual(3);
});

it("should work with more than two elements", () => {
  expect(firstNonConsecutiveNumber([1, 2, 4, 5, 6])).toEqual(4);
});

it("should work when consecutive sequence contains both positive and negative numbers", () => {
  expect(firstNonConsecutiveNumber([-1, 0, 1, 10])).toEqual(10);
});

it("should return null when all numbers are consecutive", () => {
  expect(firstNonConsecutiveNumber([1, 2, 3, 4, 5, 6])).toBeNull();
});
