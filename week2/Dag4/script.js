// Element toevoegen aan DOM (alleen de big-five-buttons)

document.addEventListener("DOMContentLoaded", function() {
  const animalButtons= document.querySelectorAll("big-five-button");
  animalButtons.forEach(function(animalButton) {
    animalButton.addEventListener("click", animalSpotted);
  });
  const animalSpotted = event => {
  listItem.appendChild(document.createTextNode(spottedAnimal));
  const list = document.getElementById("spotted-animals-list");
  list.appendChild(listItem);};
  //Element verwijderen uit DOM