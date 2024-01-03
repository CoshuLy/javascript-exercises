const add = function(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function(arr) {
	let result = arr.reduce((sum, current) => sum + current, 0);
  return result;
};

const multiply = function(arr) {
  let result = arr.reduce((product, current) => product * current, 1);
  return result;
};

const power = function(firstNumber, secondNumber) {

  return firstNumber ** secondNumber;
};

const factorial = function(number) {
  let product = 1;

	for(let i = 1; i <= number; i++){
      product *= i;
    }

  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
