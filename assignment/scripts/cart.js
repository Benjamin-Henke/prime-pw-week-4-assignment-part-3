console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const maxItems = 5;
let basket = [];

// function addItems: will add string 'item'  to the beginning of array basket
function addItem(item) {
  basket.push(item);
  return true;
} // end function addItems

// function listItems: will loop through array 'basket' by index values.
function listItems(array) {
  basket.forEach((basket) => console.log(basket));
} // end function listItems

/*
// function isFull will loop through the array basket to check if basket is less than maxITems
function isFull(basket) {
  for (let i = 0;  i++) {
    if (basket < maxItems) {
      return false;
    } // end if statement
    else {
      return true
    } // end if statement
  } // end for of loop
} // end function isFull


function isFull(basket) {
  let i = 0;
  while (basket.length < maxItems) {
    return false;
    i++;
  } // end while loop
  return true;
} // end function 'isFull'
*/

// Call functions to test:
console.log('Empty basket:', basket);

// add new items to the basket
console.log('adding eggs to basket:', addItem('eggs'));
console.log('adding bacon to basket:', addItem('bacon'));
console.log('adding bread to basket:', addItem('bread'));
console.log('adding milk to basket:', addItem('milk'));
console.log('adding apple juice to basket:', addItem('apple juice'));
console.log('adding peaches to basket:', addItem('peaches'));
console.log('List of items in basket:');
listItems(basket);

/*
console.log('Is my basket full?', isFull());
*/

// function empty will reset the basket to 0 using the array length property
function empty() {
  basket.length = 0;
} // end empty function
empty(basket); // emptying the basket

// Call function to test
console.log("Empting the basket:", basket);

// add new items to a new basket
console.log('New basket of groceries:');
console.log('adding cherries to cherries:', addItem('cherries'));
console.log('adding steaks to basket:', addItem('steaks'));
console.log('adding spinach to basket:', addItem('spinach'));
console.log('adding salad dressing to basket:', addItem('salad dressing'));
console.log('List of items in basket:');
listItems(basket);

/*
// testing to see if my basket is full:
console.log('Is my basket full?', isFull());
*/

empty(basket); // emptying out the new basket
console.log('Emptying the basket:', basket);
