const palindromes = function (string) {
  const revStr = string.split("").reverse().join('');

  if (revStr === string) {
    return true;
  } else {
    return false;
  }

};

// Do not edit below this line
module.exports = palindromes;
