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
  this.hourlySales = [];
  this.businessHours = [' 6am',' 7am',' 8am',' 9am',' 10am',' 11am',' 12pm',' 1pm',' 2pm',' 3pm',' 4pm',' 5pm',' 6pm',' 7pm'];
};

Store.prototype.generateTraffic = function(){
  var min = this.minCustomer;
  var max = this.maxCustomer;
  var randomNumber = Math.random()*(max-min)+ min;
    return Math.floor(randomNumber);
};

Store.prototype.simulateSales = function(){
  for (var i = 0; i < 14; i++){
    var soldCookies = this.generateTraffic()*this.averageSale;
    this.hourlySales.push(soldCookies);
    return Math.floor(soldCookies);
    // console.log(Math.floor(soldCookies));
  }
};

//1 Find Target
//2 Create element
//2.5 populate text
//3 append to dom


 var seaStore = new Store('Seattle', 23, 65, 6.3)
// console.log(x)
console.log(seaStore.generateTraffic());
console.log(seaStore.simulateSales());
// console.log(seaStore.render());