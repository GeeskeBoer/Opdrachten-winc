// zet de functie om naar een arrow functie
const ikRockArrowFunctions = function() {
  console.log("Joe, ik rock de arrow functions!");
};
ikRockArrowFunctions();

const ikRockArrowFunctions = () => {
  console.log("Joe, ik rock de arrow functions!");
};

ikRockArrowFunctions();

const fivePlusSeven = function() {
  return 5 + 7;
};

fivePlusSeven();

const fivePlusSeven = () => 5 + 7;
fivePlusSeven();

() => 1 + 2;

const myFunction = (a, b) => a + b;
const addFive = a => a + 5;
const createObject = () => ({ greeting: "hoi" });
