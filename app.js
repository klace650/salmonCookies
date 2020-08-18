'use strict';

// STORE STATS //
var stores = [];

 var seaStore = new Store('Seattle', 23, 65, 6.3)
 var tokStore = new Store('Tokyo', 3, 24, 1.2 )
 var parStore = new Store('Dubai', 11, 38, 3.7)
 var dubStore = new Store('Paris', 20, 38, 2.3)
 var limStore = new Store('Lima', 2, 16, 4.6)


// Constructor //

function Store(location, minCustomer, maxCustomer, averageSale){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageSale = averageSale;
  this.hourlySales = [];
  this.businessHours = ['',' 6am',' 7am',' 8am',' 9am',' 10am',' 11am',' 12pm',' 1pm',' 2pm',' 3pm',' 4pm',' 5pm',' 6pm',' 7pm'];
  stores.push(this);
};

console.log(stores)

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
  }
};

Store.prototype.getTotals = function(){
  var cookieTotal = 0;
  for (var i = 0; i < this.hourlySales.length; i++) {
    cookieTotal += this.hourlySales[i];
  };
  this.hourlySales.push(cookieTotal);
};
  
Store.prototype.renderTable = function(){
  var table = document.getElementById('salesReport');
  var row = document.createElement('tr');
    var tableHeader = document.createElement('th');
    tableHeader.textContent = this.location;
    row.appendChild(tableHeader);
  table.appendChild(row);
    
  for (var i = 0; i < this.hourlySales.length; i++){
    var table = document.getElementById('salesReport');
    var tableData = document.createElement('td');
      tableData.textContent = this.hourlySales[i];
    row.appendChild(tableData);
  }
};

Store.prototype.renderTableHeader = function(){
  for (var i = 0; i < this.businessHours.length; i++){
  var headerParent = document.getElementById('salesReport');  
var headerChild = document.createElement('th');
headerChild.textContent = this.businessHours[i];
headerParent.appendChild(headerChild);
  }
};

function runSalesSimulation(){
  for (var i = 0; i < stores.length; i++){
    stores[i].simulateSales();
    stores[i].getTotals();
    stores[i].renderTableHeader();
    stores[i].renderTable();
  }
};
// Run Simulation and generate graph.
runSalesSimulation();


