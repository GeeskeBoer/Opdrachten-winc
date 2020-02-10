const age = 22;
const isFemale = true;
const driverStatus = "bob";

if (age >= 18) {
  console.log("Je mag naar binnen");
} else {
  console.log(
    "Je bent nog geen 18, je wordt vriendelijk verzocht terug te komen als je 18 bent"
  );
}

if (isFemale) {
  console.log("Je mag naar binnen");
} else {
  console.log(
    "je bent geen female, je wordt vriendelijk verzocht terug te komen als je female bent"
  );
}

if (driverStatus === "bob") {
  console.log("Jij bobt, je mag rijden");
} else {
  console.log("je bent geen bob, je mag niet rijden");
}
