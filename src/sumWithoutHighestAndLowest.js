// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

const sumWithoutHighestAndLowest = (array) => {
  const sortedArray = array.sort((a, b) => a - b);
  const lowest = sortedArray[0];
  const highest = sortedArray[sortedArray.length - 1];
  const filteredArray = sortedArray.filter((number) => {
    return number !== lowest && number !== highest;
  });
  return filteredArray.reduce((acc, val) => acc + val, 0);
};

module.exports = sumWithoutHighestAndLowest;
