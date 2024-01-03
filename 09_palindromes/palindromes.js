const palindromes = function (str) {
    let cleanString = str.replace(/[^a-z0-9]/gi, '');

    return cleanString.toLowerCase() === cleanString.split('').reverse().join('').toLowerCase();
  }

// Do not edit below this line
module.exports = palindromes;
