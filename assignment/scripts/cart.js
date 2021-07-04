console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const maxItems = 5;
let basket = [];

// function addItems: will add string 'item'  to the beginning of array basket
// addItems will check the function isFull to see if the amount of items in basket
// is less than or greater/equal to maxItems. If isFull is false, addItem will run
// and push the item to the array basket. if isFull is true, addItems will not push
// the item to the array basket
function addItem(item) {
  while (isFull () === false) {
    basket.push(item);
    return true;
  } // end while loop
  while (isFull() === true) {
    return false;
  } // end while loop
} // end function addItems

// function listItems: will loop through array 'basket' by index values.
function listItems(array) {
  basket.forEach((basket) => console.log(basket));
} // end function listItems

// function empty will reset the basket to 0 using the array length property
function empty() {
  basket.length = 0;
} // end empty function

// Stretch Goal:
// function isFull will check to see if the amount of items in the basket
// has reached the maxItems variable. If it has, it will say true. If it
// hasn't, it will return false.
function isFull(array) {
  let i = 0;
  while (basket.length < maxItems) {
    return false;
    i++;
  } // end while loop
  while (basket.length >= maxItems) {
    return true;
    i++;
  } // end while loop
} // end function 'isFull'

// Stretch Goal ----> Got stuck on this one.
// function removeItem
function removeItem(item) {
  console.log(item.indexOf('bread'));
  basket.splice(2, 1);
} // end function removeItem

console.log('Empty basket:', basket);

// add new items to the basket
console.log('adding eggs to basket:', addItem('eggs'));
console.log('adding bacon to basket:', addItem('bacon'));
console.log('adding bread to basket:', addItem('bread'));
console.log('adding milk to basket:', addItem('milk'));
console.log('adding apple juice to basket:', addItem('apple juice'));
console.log('adding peaches to basket:', addItem('peaches'));

// list of items in their own seperate line
console.log('List of items in basket:');
listItems(basket);

console.log('Is my basket full?', isFull(basket));

// Removing bread from basket and logging the new list of items
removeItem(basket);
console.log('list of items:');
listItems(basket);


// emptying the basket
empty(basket);
console.log("Empting the basket:", basket);


// add new items to a new basket
console.log('New basket of groceries');
console.log('adding cherries to basket:', addItem('cherries'));
console.log('adding steaks to basket:', addItem('steaks'));
console.log('adding spinach to basket:', addItem('spinach'));
console.log('adding salad dressing to basket:', addItem('salad dressing'));

// list of items in their own seperate line
console.log('List of items in basket:');
listItems(basket);

console.log('Is my basket full?', isFull());
// emptying the basket
empty(basket);
console.log('Emptying the basket:', basket);
