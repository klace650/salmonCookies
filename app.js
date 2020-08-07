'use strict'
// Math.random script from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Seattle Store

var seaStore = {
  minCustomer: 23,
  maxCustomer: 65,
  averageSale: 6.3, //its per visit, bud.

  // Generate random customer traffic
  generateTraffic: function(){
    var pickANumber = getRandomIntInclusive(this.minCustomer,this.maxCustomer);
    return pickANumber;
    
  },
    // within the upper and lower limits of customer capacity

  // Simulate sales using random traffic and averageSale

};
console.log(seaStore.generateTraffic());
