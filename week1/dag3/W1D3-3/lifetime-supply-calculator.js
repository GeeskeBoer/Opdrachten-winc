const calculateSupply = function(age, amountPerDay) {
  const maxAge = 80;
  const restOfYourLife = 365 * amountPerDay * (maxAge - age);

  let tell =
    "You will need " +
    restOfYourLife +
    " to last you until the ripe old age of " +
    maxAge;
  console.log(tell);
};

calculateSupply(20, 4);
