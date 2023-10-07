const repeatString = (string, number) =>{

  if (number >= 0){
    let stringRepeat = string.repeat(number);
    
    return stringRepeat;
  } else if(number < 0 ){

    return 'ERROR';
  } else{
    return '';
  }

}

// Do not edit below this line
module.exports = repeatString;
