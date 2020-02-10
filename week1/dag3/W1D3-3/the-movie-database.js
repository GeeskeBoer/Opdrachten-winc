const favoriteMovie = {
  title: "Puff the Magic Dragon",
  duration: 30,
  stars: ["Puff", "Jackie", "Living Sneezes"]
};

const printMovie = function(movie) {
  console.log(movie.title + " lasts for " + movie.duration + " minutes");
  console.log("Stars: " + movie.stars.join(", "));
};
printMovie(favoriteMovie);

//Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes.
