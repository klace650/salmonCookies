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
  soldCookies: [],

  // Generate random customer traffic
  // within limits
  generateTraffic: function(){
    var pickANumber = getRandomIntInclusive(this.minCustomer,this.maxCustomer);
    return pickANumber; 
  },
  // Simulate sales using random traffic and averageSale
  //just need to multiply generated traffic count and averageSale:
  // needs to run for each hour - for loop i reckon?
  simulateSales: function(){
    var runSim = this.generateTraffic() * this.averageSale
    return runSim;
  },
};



console.log(seaStore.generateTraffic()); //seaStore.generateTraffic produces one random number between 23 and 60. yus.
console.log(seaStore.simulateSales()); // so far this just shows one hour
