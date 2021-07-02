console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []

// function addItems: will add string 'item'  to the beginning of array basket
function addItem(item) {
  basket.push(item);
  return true;
} // end function addItems

// function listItems: will loop through array 'basket' by index values.
function listItems(item) {
  for (let i of basket) {
  } // end for of loop
} // end listItems


// Call functions to test:
console.log('Empty basket:', basket);

console.log('adding eggs to basket:', addItem('eggs'));
console.log('Basket is:', basket);

console.log('adding bacon to basket:', addItem('bacon'));
console.log('Basket is:', basket);

console.log('adding bread to basket:', addItem('bread'));
console.log('Basket is:', basket);

console.log('adding milk to basket:', addItem('milk'));
console.log('Basket is:', basket);

// function empty will reset the basket to 0 using the array length property
function empty() {
  basket.length = 0;
} // end empty function
empty(basket); // emptying the basket

// Call function to test
console.log("Empting the basket:", basket);

// Here we can add new items to the basket
console.log('New basket of groceries:');

console.log('adding cherries to cherries:', addItem('cherries'));
console.log('Basket is:', basket);

console.log('adding steaks to basket:', addItem('steaks'));
console.log('Basket is:', basket);

console.log('adding spinach to basket:', addItem('spinach'));
console.log('Basket is:', basket);

console.log('adding salad dressing to basket:', addItem('salad dressing'));
console.log('Basket is:', basket);

empty(basket); // emptying out the new basket
console.log('Emptying the basket:', basket);
