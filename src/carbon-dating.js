const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" ||
      /^\s*$/.test(sampleActivity) || !isFinite(+sampleActivity) ||
      +sampleActivity <= 0 || +sampleActivity > MODERN_ACTIVITY){
    return false;
  }
  return Math.round(Math.log(MODERN_ACTIVITY / +sampleActivity) / (Math.log(2) / HALF_LIFE_PERIOD));
};

module.exports = function countCats(arr) {
  let result = 0;
  newArr = arr.flat();
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === '^^') {
      result += 1;
    } 
  }
  
  return result;
};
