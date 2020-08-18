'use strict';

// Constructor //

function Store(location, minCustomer, maxCustomer, averageSale){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageSale = averageSale;
  this.hourlySales = [];
  this.businessHours = [' 6am',' 7am',' 8am',' 9am',' 10am',' 11am',' 12pm',' 1pm',' 2pm',' 3pm',' 4pm',' 5pm',' 6pm',' 7pm', 'Total'];
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
    this.hourlySales.push(Math.floor(soldCookies));
    // return Math.floor(soldCookies);
    // console.log(Math.floor(soldCookies));
  }
};



Store.prototype.getTotals = function(){
  var cookieTotal = 0;
  for (var i = 0; i < this.hourlySales.length; i++) {
    cookieTotal += this.hourlySales[i];
  };
  this.hourlySales.push(cookieTotal);
};



Store.prototype.salesHeader = function(){
  for (var i = 0; i < this.businessHours.length; i++){
    var headerParent = document.getElementById('salesHeader');
    var headerChild = document.createElement('th');
    headerChild.textContent = this.businessHours[i];
    headerParent.appendChild(headerChild);
  }
}



// Store.prototype.salesCell = function(){
//   for (var i = 0; i < this.hourlySales.length; i++){
//     var cellParent = document.getElementById('salesCell');
//     var cellChild = document.createElement('td');
//     cellChild.textContent = this.hourlySales[i];
//     cellParent.appendChild(cellChild);
//   }
// }

// STORE STATS //
 var seaStore = new Store('Seattle', 23, 65, 6.3)
//  var testStore = new Store ('Test', 21, 45, 5.2)

// CONSOLE LOGS //
seaStore.simulateSales();
seaStore.getTotals();
seaStore.salesHeader();
seaStore.salesCell();
console.log(seaStore.hourlySales);