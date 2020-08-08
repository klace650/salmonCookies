'use strict';
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
  businessHours: [' 6am',' 7am',' 8am',' 9am',' 10am',' 11am',' 12pm',' 1pm',' 2pm',' 3pm',' 4pm',' 5pm',' 6pm',' 7pm'],

  generateTraffic: function(){
    var pickANumber = getRandomIntInclusive(this.minCustomer,this.maxCustomer);
    return pickANumber;
  },
  simulateSales: function(){
    for (var i = 0; i < 14; i++){
    var runSim = this.generateTraffic() * this.averageSale;
    var roundedSales = Math.floor(runSim);
    this.soldCookies[i] = roundedSales;
    }
    },
  postToSales: function(){
    for (var i = 0; i < 14; i++){
    var parentSales = document.getElementById('sea');
    var childSales = document.createElement('li');
    childSales.textContent = this.soldCookies[i] + this.businessHours[i];
    parentSales.appendChild(childSales);  
    }
  },
};
seaStore.simulateSales();
seaStore.postToSales();