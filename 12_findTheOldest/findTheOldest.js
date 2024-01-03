const findTheOldest = function (arr) {
  const currentYear = new Date().getFullYear();
  
  let arrMapped = arr.map((item, index) => {
      let yearOfDeath = item.yearOfDeath || currentYear
      return {
          name: item.name,
          age: yearOfDeath - item.yearOfBirth
      }
  });
  
  const oldestPerson = arrMapped.reduce((oldest, current) => {
      return current.age > oldest.age ? current : oldest;
  }, arrMapped[0]);
  
  return oldestPerson;
};
//npm test findTheOldest.spec.js
// Do not edit below this line
module.exports = findTheOldest;
