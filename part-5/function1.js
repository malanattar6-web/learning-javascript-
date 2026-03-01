function greet() {
  console.log("Hello!");
}
greet();

function greet(name) {
  console.log("hello" + name);
}
greet("malan");

function greet(yusra) {
  console.log(`Hello ${name}`);
}
function add(a, b) {
  console.log(a + b);
}
add(3, 5);
function makeTea(teaTypeOfTea) {
  return `Making ${typeofTea}`;
}
let teaOrder = makeTea("lemon tea");
console.log(teaOrder);

function example() {
  return "done";
  console.log("This will Never run");
}
function orderTea(teaTypeS) {
  function confirmorder() {
    return "Order confirmed for chai";
  }
  return confirmOrder();
}
let orderConfirmation = orderTea("masala chai");
console.log(orderConfirmation);

function greet() {
  console.log("Hello!");
}
const greet = () => {
  console.log("hello!");
};

const calculateTotal = (price, quantity) => {
  return price * quantity;
};

const calculateTotal1 = (price, quantity) => price * quantity;
