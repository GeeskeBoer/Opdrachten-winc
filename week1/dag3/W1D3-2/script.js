makeSandwichCheese:
Take 1 slice of bread. 
put 1 slice of cheese on the bread. 
Put 1 slice bread on top.

// het begint met de declartion van mijn functie
function makeSandwichCheese() {
  console.log("take 1 slice of bread");
  console.log("put 1 slice of cheese on the bread");
  console.log("Put 1 slice bread on top");
}
makeSandwichCheese(); //dit is een call
//hieronder alweer een declaration
function makeSandwich(topping) {
  console.log("take 1 slice of bread");
  console.log("put 1 slice of" + " " + topping + " " + "on the bread");
  console.log("Put 1 slice bread on top");

  console.log("There you go, a sanwich with" + " " + topping);
}
makeSandwich("cheese");
makeSandwich("ham");

const calculateDiscountedPrice = function(totalAmount, discount) {
  return Math.round(totalAmount - discount);
};
console.log(calculateDiscountedPrice(100, 15));

const calculateHighDiscount = function(totalAmount, discount) {
  if (totalAmount > 25) {
    return Math.round(totalAmount - discount);
  } else {
    return totalAmount;
  }
};
console.log(calculateHighDiscount(40, 5));
