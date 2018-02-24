module.exports = function getZerosCount(number) {
  // your implementation
  zerosCount = 0;
  while (number){
    number = Math.floor(number/5);
    zerosCount += number;
  }
  

  return zerosCount;

}
