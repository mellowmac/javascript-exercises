const convertToCelsius = function(Fahrenheit) {
let fH = Fahrenheit;

fH = (fH.toFixed(1) - 32) * 5/9;
return fH;
};


const convertToFahrenheit = function(Celcius) {
let cC = Celcius;

cC = (cC.toFixed(1) * 9/5 + 32);
return cC;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
