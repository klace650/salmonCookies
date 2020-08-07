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
  averageSale: 6.3,
  soldCookies: [],

  generateTraffic: function(){
    var pickANumber = getRandomIntInclusive(this.minCustomer,this.maxCustomer);
    return pickANumber; 
  },
  // needs to run for each hour - for loop i reckon?
  // also needs to display in soldCookies
  // publish to soldCookies first maybe?
  
  simulateSales: function(){

    var runSim = (this.generateTraffic() * this.averageSale);
    var roundedSales = Math.floor(runSim);
      this.soldCookies[0] = roundedSales
      // console.log('sim sales - inside function '+roundedSales)
    // return Math.floor(runSim)
  },

};

console.log(seaStore.soldCookies)

// console.log('Random traffic generator - seaStore: '+ seaStore.generateTraffic());
console.log('sim sales - outside function: '+ seaStore.simulateSales()); // so far this just shows one hour
