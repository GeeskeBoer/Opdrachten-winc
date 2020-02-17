const arrayWithWords = ["nice", "awesome", "tof"];
const addTheWordCool = function(array) {
  array.push("cool");
  return array;
};
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));
const amountOfElementsInArray = function(array) {
  return array.length;
};

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); // resultaat: "Belgie"
const selectBelgiumFromBenelux = function(array) {
  return array[0];
};
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
const lastElementInArray = function(array) {
  return array[array.lenght - 1];
};
const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function(array) {
  const nieuweArray = array.slice(1, [array.length]);
  console.log(nieuweArray, array);
  return nieuweArray;
};
const impeachTrumpSplice = function(array) {
  const verwijderdElement = array.splice(0, 1);
  console.log(verwijderdElement, array);
  return array;
};
console.log(impeachTrumpSlice(president));
console.log(impeachTrumpSplice(president));

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
const stringsTogether = function(array) {
  return array.join(" ");
};

combineArrays([1, 2, 3], [4, 5, 6]);


