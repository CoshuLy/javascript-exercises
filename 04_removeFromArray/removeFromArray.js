const removeFromArray = (array, ...Args) => {
  let newArray = [];

  array.forEach(element => {
    if(!Args.includes(element)){
        newArray.push(element)
    }
  })
  return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
