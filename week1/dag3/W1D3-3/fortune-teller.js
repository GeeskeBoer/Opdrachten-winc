const tellFortune = function(children, partner, geographic, job) {
  let future =
    "You will be a " +
    job +
    " in " +
    geographic +
    ",and married to " +
    partner +
    " with " +
    children +
    " kids.";
  console.log(future);
};
tellFortune(4, "Gordon", "New York", "Backer");
tellFortune(1, "Bert", "Enschede", "employer");
tellFortune(3542, "Maxima", "Heino", "Singer");
