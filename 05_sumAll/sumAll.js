const sumAll = (firstNumber, secondNumber) => {
  let sum = 0;
  let userInput = true;

  if(firstNumber < 0 || secondNumber < 0){
    return 'ERROR';
  } else if (Number(firstNumber) !== firstNumber || Number(secondNumber) !== secondNumber){
    return 'ERROR';
  } else if (firstNumber > secondNumber){
    for (let i = secondNumber; i <= firstNumber; i++){
        sum += i;}

        return sum;
    } else if (firstNumber < secondNumber){
        for (let i = firstNumber; i <= secondNumber; i++){
            sum += i;}

        return sum;
    } else if (firstNumber !== Number || secondNumber !== Number){
        return 'ERROR';
    } 
}
// Do not edit below this line
module.exports = sumAll;