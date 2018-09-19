module.exports = function getZerosCount(number) {
  
  let count= Math.floor(number/5)+Math.floor(number/25)+Math.floor(number/125)
 +Math.floor(number/625)+Math.floor(number/3125)
  +Math.floor(number/15625)+Math.floor(number/78125)
 +Math.floor(number/390625)+Math.floor(number/1953125) 
  +Math.floor(number/9765625)+Math.floor(number/48828125) ;// your implementation


  return count;
}
