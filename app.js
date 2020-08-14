'use strict';
// Math.random script from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var businessHours = [' 6am',' 7am',' 8am',' 9am',' 10am',' 11am',' 12pm',' 1pm',' 2pm',' 3pm',' 4pm',' 5pm',' 6pm',' 7pm'];


// Constructor

function Store(location, minCustomer, maxCustomer, averageSale){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageSale = averageSale;
  // this.soldCookies = soldCookies;
}
Store.prototype.generateTraffic = function(){
  var pickANumber = getRandomIntInclusive(this.minCustomer,this.maxCustomer);
    return pickANumber;
}
Store.prototype.simulateSales = function(){
  for (var i = 0; i < 14; i++){
    var runSim = this.generateTraffic() * this.averageSale;
    var roundedSales = Math.floor(runSim);
    this.soldCookies[i] = roundedSales;
}
}  

var seaStore = new Store('Seattle',23,65,6.3);

// console.log(seaStore.simulateSales());

seaStore.simulateSales()

//************Start of Objects**************//

// var seaStore = {
//   minCustomer: 23,
//   maxCustomer: 65,
//   averageSale: 6.3,
//   soldCookies: [],
  
//   simulateSales: function(){
//     for (var i = 0; i < 14; i++){
//     var runSim = this.generateTraffic() * this.averageSale;
//     var roundedSales = Math.floor(runSim);
//     this.soldCookies[i] = roundedSales;
//     }
//     },
//   postToSales: function(){
//     for (var i = 0; i < 14; i++){
//     var parentSales = document.getElementById('sea');
//     var childSales = document.createElement('li');
//     childSales.textContent = this.soldCookies[i] + businessHours[i];
//     parentSales.appendChild(childSales);  
//     }
//   },
// };

// var tokStore = {
//   minCustomer: 3,
//   maxCustomer: 24,
//   averageSale: 1.2,
//   soldCookies: [],

//   generateTraffic: function(){
//     var pickANumber = getRandomIntInclusive(this.minCustomer,this.maxCustomer);
//     return pickANumber;
//     },
//   simulateSales: function(){
//     for (var i = 0; i < 14; i++){
//     var runSim = this.generateTraffic() * this.averageSale;
//     var roundedSales = Math.floor(runSim);
//     this.soldCookies[i] = roundedSales;
//     }
//     },
//   postToSales: function(){
//     for (var i = 0; i < 14; i++){
//     var parentSales = document.getElementById('tok');
//     var childSales = document.createElement('li');
//     childSales.textContent = this.soldCookies[i] + businessHours[i];
//     parentSales.appendChild(childSales);  
//     }
//   },
// };
// var dubStore = {
//   minCustomer: 11,
//   maxCustomer: 38,
//   averageSale: 3.7,
//   soldCookies: [],

//   generateTraffic: function(){
//     var pickANumber = getRandomIntInclusive(this.minCustomer,this.maxCustomer);
//     return pickANumber;
//     },
//   simulateSales: function(){
//     for (var i = 0; i < 14; i++){
//     var runSim = this.generateTraffic() * this.averageSale;
//     var roundedSales = Math.floor(runSim);
//     this.soldCookies[i] = roundedSales;
//     }
//     },
//   postToSales: function(){
//     for (var i = 0; i < 14; i++){
//     var parentSales = document.getElementById('dub');
//     var childSales = document.createElement('li');
//     childSales.textContent = this.soldCookies[i] + businessHours[i];
//     parentSales.appendChild(childSales);  
//     }
//   },
// };
// var parStore = {
//   minCustomer: 20,
//   maxCustomer: 38,
//   averageSale: 2.3,
//   soldCookies: [],

//   generateTraffic: function(){
//     var pickANumber = getRandomIntInclusive(this.minCustomer,this.maxCustomer);
//     return pickANumber;
//     },
//   simulateSales: function(){
//     for (var i = 0; i < 14; i++){
//     var runSim = this.generateTraffic() * this.averageSale;
//     var roundedSales = Math.floor(runSim);
//     this.soldCookies[i] = roundedSales;
//     }
//     },
//   postToSales: function(){
//     for (var i = 0; i < 14; i++){
//     var parentSales = document.getElementById('par');
//     var childSales = document.createElement('li');
//     childSales.textContent = this.soldCookies[i] + businessHours[i];
//     parentSales.appendChild(childSales);  
//     }
//   },
// };
// var limStore = {
//   minCustomer: 2,
//   maxCustomer: 16,
//   averageSale: 4.6,
//   soldCookies: [],

//   generateTraffic: function(){
//     var pickANumber = getRandomIntInclusive(this.minCustomer,this.maxCustomer);
//     return pickANumber;
//     },
//   simulateSales: function(){
//     for (var i = 0; i < 14; i++){
//     var runSim = this.generateTraffic() * this.averageSale;
//     var roundedSales = Math.floor(runSim);
//     this.soldCookies[i] = roundedSales;
//     }
//     },
//   postToSales: function(){
//     for (var i = 0; i < 14; i++){
//     var parentSales = document.getElementById('lim');
//     var childSales = document.createElement('li');
//     childSales.textContent = this.soldCookies[i] + businessHours[i];
//     parentSales.appendChild(childSales);  
//     }
//   },
// };

// //  Simulate
// seaStore.simulateSales();
// tokStore.simulateSales();
// dubStore.simulateSales();
// parStore.simulateSales();
// limStore.simulateSales();
// //  Render
// seaStore.postToSales();
// tokStore.postToSales();
// dubStore.postToSales();
// parStore.postToSales();
// limStore.postToSales();