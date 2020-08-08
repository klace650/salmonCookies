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
  businessHours: ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],

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
    var childSales = document.getElementById('li');
    childSales.textContent = this.soldCookies[i] + this.businessHours[i];
    parentSales.appendChild(childSales);  
    }
  },
};
seaStore.simulateSales();
seaStore.postToSales();