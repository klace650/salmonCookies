'use strict';

// STORE STATS //
var stores = [];
var form = document.getElementById('newStore');
var businessHours = ['','6am',' 7am',' 8am',' 9am',' 10am',' 11am',' 12pm',' 1pm',' 2pm',' 3pm',' 4pm',' 5pm',' 6pm',' 7pm', 'Totals'];

 var seaStore = new Store('Seattle', 23, 65, 6.3);
 var tokStore = new Store('Tokyo', 3, 24, 1.2 );
 var parStore = new Store('Dubai', 11, 38, 3.7);
 var dubStore = new Store('Paris', 20, 38, 2.3);
 var limStore = new Store('Lima', 2, 16, 4.6);

// Constructor //
function Store(location, minCustomer, maxCustomer, averageSale){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageSale = averageSale;
  this.hourlySales = [];
  stores.push(this);
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
  }
};
Store.prototype.getTotals = function(){
  var cookieTotal = 0;
  for (var i = 0; i < this.hourlySales.length; i++) {
    cookieTotal += this.hourlySales[i];
  };
  this.hourlySales.push(cookieTotal);
};
Store.prototype.renderTableHeader = function(){
  var headerParent = document.getElementById('salesReport');
  for (var i = 0; i < businessHours.length; i++){
  var headerChild = document.createElement('th');
  headerChild.textContent = businessHours[i];
  headerParent.appendChild(headerChild);
  }
}
Store.prototype.renderTable = function(){
  var table = document.getElementById('salesReport');
  var row = document.createElement('tr');
  var tableHeader = document.createElement('td');
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
function runSalesSimulation(){
    seaStore.renderTableHeader();
  for (var i = 0; i < stores.length; i++){
    stores[i].simulateSales();
    stores[i].getTotals();
    stores[i].renderTable();
  }
};
function handleSubmit(event){
  event.preventDefault();

  var name = event.target.name.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var ave = parseInt(event.target.ave.value);

  console.log('name, min, max, ave', name, min, max, ave);
  var newLocation = new Store (name, min, max, ave);
  newLocation.generateTraffic();
  newLocation.simulateSales();
  newLocation.renderTable();
  newLocation.getTotals();
};

runSalesSimulation();
form.addEventListener('submit', handleSubmit);

