var cart = [];

function getCart(name) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// use that passed-in-string to create a new object representing the item
// object should consister of two key value pairs
// as more items are added to the cart it should look like 

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var newobject = {itemName: item , itemPrice: price};
  cart.push(newobject)
  return (item + " has been added to your cart.");
}

// function does not accept any arguements
// it should loop over every item in your cart
// returning the constents as one long, coherent statement in this format:
// "In your cart you have bananas at $17, pancake batter at $5, and eggs at $49."
// if the car is empty, return, Your shopping car is empty
// returned statement should be a single sentence that begins with "In your car, you have"
  
function viewCart() {
  if (0 === cart.length) {
    return ("Your shopping cart is empty.");
  }
  let statementArray = []
  let i = 0
  while(0 < cart.length) { 
  var item = Object.values(cart[i])[0]
  var price = Object.values(cart[i])[1]
  statementArray.push(item +" at $" + price);
  i++;
  }
  return(`In your cart, you have ${statementArray.join(', ')}.`)
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
