const findNeedle = function(words, wordToBeFound) {
  return words.indexOf(wordToBeFound);
};

//   test("Find the needle", function() {
//     const words = ["house", "train", "slide", "needle", "book"];
//     const expected = 3;

//     const output = findTheNeedle(words, "needle");
//     expect(output).toEqual(expected);

module.exports = findNeedle;
