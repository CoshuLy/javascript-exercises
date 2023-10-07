const convertToCelsius = function(fahrenheit) {
  let fahrenheitToCelsius = (fahrenheit - 32) * 5/9;
  let roundCelsius = Number(fahrenheitToCelsius.toFixed(1));
  return roundCelsius;
};

const convertToFahrenheit = function(celsius) {
  let celsiusToFahrenheit = 32 + (1.8 * celsius);
  let roundFahrenheit = Number(celsiusToFahrenheit.toFixed(1));
  return roundFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
