//Schrijf een JavaScript functie die een bepaald item weet te vinden en
//retourneren op basis van een bepaalde value.
//Zoek het hele object van Spiderman, gebaseerd op de name "Spiderman". Gebruik .find.

const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" }
];

// Hier komt jouw functie
const findSpiderman = function(superheroes) {
  return superheroes.find(function(superhero) {
    return superhero.name === "Spiderman";
  });
};

console.log(findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// B In een array met integers. Zorg dat je een array returned met de integers verdubbeld.
//Gebruik de .forEach method of, een level hoger: de .map method.
doubleArrayValues([1, 2, 3]);
const doubleArrayValues = function(array) {
  let newArray = [];
  array.forEach(number => {
    newArray.push(number * 2);
  });
  return newArray;
};

// de map methode

const doubleArrayValuesArrow = function(array) {
  return array.map(number => {
    return number + number;
  });
};
const doubleArrayValuesShortHand = function(x) {
  return x.map(n => n + n);
};

console.log("double 1,2,3:", doubleArrayValues([1,2,3]));
console.log(doubArrayValuesArrow([1,2,3]));
console.log(doubleArrayValuesShortHand([1,2,3]);
doubleArrayValues([1, 2, 3]) 
// result should be [2, 4, 6]

//- **C** In een array met integers. Schrijf een JavaScript functie die een checkt of 
//er een integer in de array aanwezig is die groter is dan 10.

containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]) 
// result should be true
 const containsNumberBiggerThan10 = function(array){ 
     return array.some(number => { return number >10;});};
 console.log("ik ben groter dan 10", containsNumberBiggerThan10([1,4,3,6,9,7,11]));

//D In een array met strings. Schrijf een JavaScript functie die kijkt of er een bepaalde string: "Italy" 
//in de array aanwezig is.

const isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
    // result should be true
const includesItaly=isItalyInTheGreat7.includes("Italy")
console.log(includesItaly);

//Antwoordformulier 
function isItalyInTheGreat7(array) {
    return array.includes("Italy");
  }
  console.log(
    isItalyInTheGreat7([
      "Canada",
      "France",
      "Germany",
      "Italy",
      "Japan",
      "United Kingdom",
      "United States"
    ])
  );
//E In een array met integers. Schrijf een JavaScript functie die elke integer vertienvoudigt. 
// Gebruikt .forEach, of als je al wat advanced stuff wilt: gebruik .map.
  console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));

  //.forEach
  const tenfold = function(array){
      let nieuweTenfoldArray=[];
      array.forEach(number => { nieuweTenfoldArray.push(number *10);})
      return nieuweTenfoldArray 
  };

  //map

const tenfold = function(array) {
    return array.map(number => { return number *10;});

};
const tenfold = function (x) {return x.map( n => n *10);  };

console.log(tenfold);

// F In een array met integers. Schrijf een JavaScript functie die checkt of alle waardes in de array 
// onder de 100 zijn, en true or false retourneert.
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
    // result should be: false

    const isBelow100 = function (array) { 
        return array.every(number => { return number<100;});
    };
    console.log("Alleen lager dan 100?:" isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]));

// - **G  Bonus!** Deze laatste is wat extra uitdagend. We hopen dat jullie deze challenge accepteren. 
//Gebruik Google en wees een beetje baldadig (gebruik wellicht een klein stukje code die je kopieert).

// In een array met integers. Schrijf een JavaScript functie die alle waardes in de array 
//bijelkaar optelt en **het totaal** van de som retourneert. Gebruik de **.reduce** method. 
//En echt, gebruik Google. 

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
    // result should be 1118

const bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]);
const bigSum = function(array){ 
return array.reduce(accumulator, number => {
    return accumulator + number;
},0);    
};
console.log("totale som van alle nummers", bigSm(numbers));
    
 
       