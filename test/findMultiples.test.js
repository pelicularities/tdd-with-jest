const findMultiples = require("../src/findMultiples");

// write test cases to ensure findMultiples() works as expected

it("should return all multiples as an array when limit is a multiple of base", () => {
  expect(findMultiples(2, 6)).toEqual([2, 4, 6]);
});

it("should return an array containing only base when limit is less than 2x base", () => {
  expect(findMultiples(10, 16)).toEqual([10]);
});

it("should return an array containing only multiples when limit is not a multiple of base", () => {
  expect(findMultiples(3, 20)).toEqual([3, 6, 9, 12, 15, 18]);
});
