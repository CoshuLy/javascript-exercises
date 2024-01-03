const fibonacci = function(number) {
  let numberParsed = parseInt(number);
  const squareRoot = Math.sqrt(5);
  const phi = (((1 + squareRoot) / 2) ** numberParsed);
  const psi = (((1 - squareRoot) / 2) ** numberParsed);
  
  if (numberParsed < 0) {
    return "OOPS";
  }
  
  return Math.round(((phi - psi) / squareRoot));
};

// Do not edit below this line
module.exports = fibonacci;
