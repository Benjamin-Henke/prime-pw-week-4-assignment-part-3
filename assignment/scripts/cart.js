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

console.log('adding eggs to basket:', addItem('apple'));
console.log('Basket is:', basket);

console.log('adding bacon to basket:', addItem('bacon'));
console.log('Basket is:', basket);

console.log('adding bread to basket:', addItem('bread'));
console.log('Basket is:', basket);

console.log('adding milk to basket:', addItem('milk'));
console.log('Basket is:', basket);
