const superHeroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210"
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220"
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195"
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186"
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195"
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165"
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145"
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167"
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220"
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250"
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200"
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400"
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200"
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200"
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown"
  }
];
//1 array van alle superheldnamen

const superHeroesNames1 = superHeroes.map(hero => hero.name);
console.log("namen van superhelpden:", superHeroesNames1);

//2. Maak een array van alle "lichte" superhelden (< 190 pounds)

const SuperHeroesLicht = superHeroes.filter(name => name.weight < 190);
console.log("lichte superhelden:", SuperHeroesLicht);

//3. Maak een array met de namen van de superhelden die 200 pounds wegen

// Pseudo code (bijna echte code): heroes.map(hero => {
//	return [doe iets met de hero]
//}).filter(hero => {
//    return [doe iets met de array die zojuist al door de map functie heen is
// geweest, en er dus anders uitziet dan die originele array] }

const preciesGewichtHeroes = superHeroes
  .map(hero => {
    return hero.name;
  })
  .filter(hero => {
    return (hero.weight = 200);
  });
console.log("deze zijn precies 200:", preciesGewichtHeroes);

//4. Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad
const superHeroesFirstApp = superHeroes.map(hero => hero.first_appearance);
console.log("First appearences van deze held:", superHeroesFirstApp);

//5. Maak een array met alle superhelden van DC Comics.

const superHeroesDCComics = superHeroes
  .filter(hero => {
    return hero.publisher == "DC Comics";
  })
  .map(hero => {
    return hero.name;
  });
console.log("Dit zijn DC Comics helden:", superHeroesDCComics);

//5a. Is dat gelukt? Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.
const superHeroesMarvelComics = superHeroes
  .filter(hero => {
    return hero.publisher == "Marvel Comics";
  })
  .map(hero => {
    return hero.name;
  });
console.log("Dit zijn Marvel Comics helden:", superHeroesDCComics);

//6. Tel het gewicht van alle superhelden van DC Comics bij elkaar op.
//Let op! Conditionals to the rescue!
//Het gewicht dat je ziet in de movieDatabase, van welk datatype is dat? Een nummer? Of een string? Oh ja, en hebben alle superhelden wel een gewicht?

const superHeroesWeightDCComics = superHeroes
  .filter(hero => {
    return hero.publisher == "DC Comics";
  })
  //Hieronder het gewicht optellen van de array hierboven
  .reduce((currentTotal, hero) => {
    const integer = parseInt(hero.weight, 10);
    return integer + currentTotal;
  }, 0);
console.log(
  "Dit is het totale gewicht van DM Comics:",
  superHeroesWeightDCComics
);

//Het gewicht dat je ziet in de movieDatabase, van welk datatype is dat? Een nummer? Of een string? Oh ja, en hebben alle superhelden wel een gewicht?
//7. Doe hetzelfde met alle superhelden van Marvel Comics
const superHeroesWeightMC = superHeroes
  .filter(hero => {
    return hero.publisher == "Marvel Comics";
  })
  .filter(hero => {
    return hero.weight !== "unknown";
  })
  //Hieronder het gewicht optellen van de array hierboven, dus alle Marvel comics
  .reduce((currentTotal, hero) => {
    const integer = parseInt(hero.weight, 10);
    return integer + currentTotal;
  }, 0);
console.log(
  "Dit is het totale gewicht van Marvel Comics:",
  superHeroesWeightMC
);
//8.Bonus: zoek de zwaarste superheld!
