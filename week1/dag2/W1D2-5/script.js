const age = 22;
const isFemale = true;
const driverStatus = "bob";
const name = "Bram";
const totalAmount = 70;

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

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Je moet de volle 100% betalen voor je drank");
}

if (name === "Bram" || name === "Sarah") {
  console.log(
    "Omdat wij ook Sarah/ Bram zijn, krijg je van ons een gratis biertje!"
  );
} else {
  console.log("Helaas, je krijgt van ons geen gratis biertje");
}

if (totalAmount > 100) {
  console.log("Gefeliciteerd, je krijgt een fles champagne");
} else if (totalAmount > 50) {
  console.log("Gefeliciteerd, je krijgt een gratis portie nachos!");
} else if (totalAmount > 25) {
  console.log("Gefeliciteerd, je krijgt gratis bitterballen");
} else {
  console.log(
    "Helaas, je hebt te weinig besteld omdat iets gratis te ontvangen, drink nog meer!"
  );
}
