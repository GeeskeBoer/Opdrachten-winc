//Functie 1:
//- Schrijf een simpele functie die meerdere cijfers bij elkaar optelt
//- De functie accepteert meerdere argumenten
//- Gebruik de **rest operator** om ervoor te zorgen dat je functie alle argumenten als een array behandelt.

const meerdereCijfersOptellen = function(...numbers) {
  return numbers.reduce((prev, current) => {
    return prev + current;
  });
};
console.log(meerdereCijfersOptellen(1, 2, 3, 4, 5));

//Functie 2:
//- Schrijf een simpele functie die meerdere cijfers bij elkaar optelt
//- De functie accepteert 1 argument, namelijk een array van cijfers
//- Gebruik de **spread operator** om ervoor te zorgen dat je functie alle items in de array bij elkaar optelt.

function sum(x, y) {
  return x + y;
}
const getallenOptellen = [1, 2];

console.log(sum(...getallenOptellen));

//Ten opzichte van antwoordformulier iets anders. Meteen functie gebruiken ipv eerst const
//const optellen = function(num1, num2, num3) {
//    return num1 + num2 + num3;
//}
//const cijfers = [1, 2, 3];
//console.log(optellen(...cijfers));
