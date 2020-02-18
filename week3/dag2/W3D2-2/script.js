console.log("WErkt dit?");
const huiswerkMaken = (vak, callback) => {
  console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
  setTimeout(() => {
    callback();
  }, 2000);
};
const klaarMetHuiswerk = () => {
  console.log(`Kijk Paps/Mams, ik ben klaar met mijn huiswerk!`);
};
huiswerkMaken("wiskunde", klaarMetHuiswerk);

const testNum = () => {
  return new Promise((resolve, reject) => {
    if (testNum < 10) {
      return "kleiner dan 10";
    } else {
      reject("10+");
    }
  });
};

testNum(12);
