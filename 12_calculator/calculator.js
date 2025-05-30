const add = function(a,b) {
    return a + b;
	
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arr) {
    const array = [];


    const sumTotal = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue);

};

const multiply = function(a,b) {
    return a * b
};

const power = function(a, b) {
    return Math.pow(a, b)
};

const factorial = function(a) {
    let res = 1;
    for (let i = 1; i <= a; i++){
         res *= i;
    }
    
    return res

	
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
