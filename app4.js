'use strict'

var storesArray = [];
var cityNameIndex = [];
var minimumCustomersIndex = [];
var maximumCustomersInmdex = [];
var averageCookiesPerCustomerIndex = [];
var hoursOfOperation = [ '', '6:00am', '7:00am', '8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm', 'Total'];

var sectionElement = document.getElementById("profile");
var table = document.createElement('table');
var tableHead = document.createElement('thead');
var tableBody = document.createElement('tbody');
sectionElement.appendChild(table);
table.appendChild(tableHead);

for ( var i = 0; i < hoursOfOperation.length; i++){
var headElement = document.createElement('th');
headElement.textContent = hoursOfOperation[i];
tableHead.appendChild(headElement);
}

table.appendChild(tableBody);

function Store(city, minCusto, maxCusto, avgCookies) {
    this.name = city;
    this.minCust = minCusto;
    this.maxCust = maxCusto;
    this.avgCookie = avgCookies;
    this.avgCookiePerHour = [];
    cityNameIndex.push(city);
    minimumCustomersIndex.push(parseInt(minCusto));
    maximumCustomersInmdex.push(parseInt(maxCusto));
    averageCookiesPerCustomerIndex.push(avgCookies);

}

    Store.prototype.randomNumberOfCustomers = function(){
        var cityNameTotal = 0;
        var row = document.createElement('tr');
        var cellOne = document.createElement('td');
        table.appendChild(row);
        row.appendChild(cellOne);
        cellOne.textContent = this.name;
    for (var j = 0; j < hoursOfOperation.length - 2; j++){
        var randomNumber = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + (this.minCust) * this.avgCookie); 
        cityNameTotal += randomNumber;    
        this.avgCookiePerHour.push(randomNumber);
        var cell = document.createElement('td');
        row.appendChild(cell);
        cell.textContent = this.avgCookiePerHour[j];

    }
    this.avgCookiePerHour.push(cityNameTotal);
    var totalCell = document.createElement('td');
    row.appendChild(totalCell);
    totalCell.textContent = cityNameTotal;

} 


// function NewStoreInfo(cityN, miniCus, maxiCus, averageC) {
//     console.log(cityN);
//     this.cityName = cityN;
//     this.miniCus = miniCus;
//     this.maxiCus = maxiCus;
//     this.averageC = averageC;
//     this.cityConstructor = new Store (this.cityName, this.miniCus, this.maxiCus, this.averagC);
//     this.cityConstructor.randomNumberOfCustomers();
//     storeInfo.push(this.cityConstructor);
//     console.log(storeInfo);

// };

// var seattle = new NewStoreInfo('Seattle', 23, 65, 6.7);

var seattle = new Store('Seattle', 23, 65, 6.7);
seattle.randomNumberOfCustomers();
storesArray.push(seattle);

var tokyo = new Store('Tokyo',3,24,1.2);
tokyo.randomNumberOfCustomers();
storesArray.push(tokyo);

var dubai = new Store('Dubai',11,38,3.7);
dubai.randomNumberOfCustomers();
storesArray.push(dubai);

var paris = new Store('Paris',20,28,2.3);
paris.randomNumberOfCustomers();
storesArray.push(paris);

var lima = new Store('Lima',2,16,4.6);
lima.randomNumberOfCustomers();
storesArray.push(lima);



var newStore = document.getElementById('newstore');

newStore.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(event.target.storename.value);
    console.log(event.target.mincust.value);
    console.log(event.target.maxcust.value);
    console.log(event.target.avgcookies.value);
    var storeName = event.target.storename.value;
    var minCus = event.target.mincust.value;
    var maxCus = event.target.maxcust.value;
    var avgCook = event.target.avgcookies.value;
    var newCity = new Store (storeName, minCus, maxCus, avgCook);
    newCity.randomNumberOfCustomers();
    storesArray.push(newCity);
    console.log(storesArray);
    tableFoot.removeChild(tableFoot.childNodes[0]);
  var footRow = document.createElement('tr');
  tableFoot.appendChild(footRow);
  footCell.textContent = 'Totals';
  footRow.appendChild(footCell);
  footerCreator(footRow);

});

var tableFoot = document.createElement('tfoot');
var footRow = document.createElement('tr');
table.appendChild(tableFoot);
tableFoot.appendChild(footRow);
var footCell = document.createElement('td');
footRow.appendChild(footCell);
footCell.textContent = 'Totals';

footerCreator(footRow);
function footerCreator(dummy){
for (var k = 0; k < hoursOfOperation.length - 1; k++){
    var hourlyTotal = 0;
    var foot = document.createElement('td');
    dummy.appendChild(foot);
    for ( var l = 0; l < storesArray.length; l++){
        hourlyTotal = hourlyTotal + storesArray[l].avgCookiePerHour[k];
}
    foot.textContent = (hourlyTotal);
}}