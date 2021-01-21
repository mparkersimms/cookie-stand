'use strict'

var sectionElement = document.getElementById("profile");
var table = document.createElement('table');
var tableHead = document.createElement('thead');
var tableBody = document.createElement('tbody');
sectionElement.appendChild(table);
table.appendChild(tableHead);

var hoursOfOperation = [ '', '6:00am', '7:00am', '8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm', 'Total'];
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
var tableFoot = document.createElement('tfoot');
var footRow = document.createElement('tr');
table.appendChild(tableFoot);
tableFoot.appendChild(footRow);
var footCell = document.createElement('td');
footRow.appendChild(footCell);
footCell.textContent = 'Totals';

var seattle = new Store('Seattle', 23, 65, 6.7);
seattle.randomNumberOfCustomers();

var tokyo = new Store('Tokyo',3,24,1.2);
tokyo.randomNumberOfCustomers();

var dubai = new Store('Dubai',11,38,3.7);
dubai.randomNumberOfCustomers();

var paris = new Store('Paris',20,28,2.3);
paris.randomNumberOfCustomers();


var lima = new Store('Lima',2,16,4.6);
lima.randomNumberOfCustomers();

for (var k = 0; k < hoursOfOperation.length - 1; k++){
    var foot = document.createElement('td');
    footRow.appendChild(foot);
    foot.textContent = (seattle.avgCookiePerHour[k] + tokyo.avgCookiePerHour[k] + dubai.avgCookiePerHour[k] + paris.avgCookiePerHour[k] + lima.avgCookiePerHour[k]);
}