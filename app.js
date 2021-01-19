'use strict'

var seattle = {
    name: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    avgCustPerHour: null,
    avgCookiePerHour: null,
    numberOfCustomers: function(limit){        
        var randomNumber = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + (this.minCust)); 
        this.avgCustPerHour = randomNumber;
        this.avgCookiePerHour = Math.round(randomNumber * this.avgCookie);
        return randomNumber;
    },
}
var sectionElement = document.getElementById("profile");
var divElement = document.createElement('div');
var h2Element = document.createElement('h2');
divElement.appendChild(h2Element); 
sectionElement.appendChild(divElement);
h2Element.textContent = seattle.name;
var ulElement = document.createElement('ul');
divElement.appendChild(ulElement);
seattle.numberOfCustomers(seattle.maxCust);
seattle.avgCookiePerHour
var avgCookiesPerHourSeattleArray = [];
var hoursOfOperation = ['6am:', '7am:', '8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','8pm:']
var seattleTotal = 0

for ( var i = 0; i < hoursOfOperation.length; i++){
    seattle.numberOfCustomers(seattle.maxCust);
    avgCookiesPerHourSeattleArray.push(seattle.avgCookiePerHour);
    var seattleTotal = (seattleTotal + avgCookiesPerHourSeattleArray[i]);
    console.log(hoursOfOperation[i] + ' - ' + avgCookiesPerHourSeattleArray[i] + ' cookies');
    
    var liElement = document.createElement('li');
    ulElement.appendChild(liElement);       
    liElement.textContent = hoursOfOperation[i] + ' - ' + avgCookiesPerHourSeattleArray[i] + ' cookies';
}
    var liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = 'Total - ' + seattleTotal + ' cookies';
  
    // var test = 'test'
    // document.write('test')
    // var sectionElement = document.createElement('section');
    // var divElement = document.createElement('div');
    // var h2Element = document.createElement('h2');
    // var sectionElement = document.getElementById("profile");
    // var ulElement = document.createElement('ul');
    // var liElement = document.createElement('li');
    // sectionElement.appendChild(divElement);
    // divElement.appendChild(h2Element);   
    // divElement.appendChild(ulElement);
    // ulElement.appendChild(liElement);
    // h2Element.textContent = seattle.name;
    // liElement.textContent = 'one';
    // liElement.textContent = 'two';
    
   




var tokyo = {
    name: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    avgCustPerHour: null,
    avgCookiePerHour: null,
    numberOfCustomers: function(limit){        
        var randomNumber = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + (this.minCust)); 
        this.avgCustPerHour = randomNumber;
        this.avgCookiePerHour = Math.round(randomNumber * this.avgCookie);
        return randomNumber;
    },
}
var sectionElement = document.getElementById("profile");
var divElement = document.createElement('div');
var h2Element = document.createElement('h2');
divElement.appendChild(h2Element); 
sectionElement.appendChild(divElement);
h2Element.textContent = tokyo.name;
var ulElement = document.createElement('ul');
divElement.appendChild(ulElement);
tokyo.numberOfCustomers(tokyo.maxCust);
tokyo.avgCookiePerHour
var avgCookiesPerHourTokyoArray = [];
var hoursOfOperation = ['6am:', '7am:', '8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','8pm:']
var tokyoTotal = 0

for ( var i = 0; i < hoursOfOperation.length; i++){
    tokyo.numberOfCustomers(tokyo.maxCust);
    avgCookiesPerHourTokyoArray.push(tokyo.avgCookiePerHour);
    var tokyoTotal = (tokyoTotal + avgCookiesPerHourTokyoArray[i]);
    console.log(hoursOfOperation[i] + ' - ' + avgCookiesPerHourTokyoArray[i] + ' cookies');
    
    var liElement = document.createElement('li');
    ulElement.appendChild(liElement);       
    liElement.textContent = hoursOfOperation[i] + ' - ' + avgCookiesPerHourTokyoArray[i] + ' cookies';
}
    var liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = 'Total - ' + tokyoTotal + ' cookies';





var dubai = {
    name: 'Dubai',
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    avgCustPerHour: null,
    avgCookiePerHour: null,
    numberOfCustomers: function(limit){        
        var randomNumber = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + (this.minCust)); 
        this.avgCustPerHour = randomNumber;
        this.avgCookiePerHour = Math.round(randomNumber * this.avgCookie);
        return randomNumber;
    },
}
var sectionElement = document.getElementById("profile");
var divElement = document.createElement('div');
var h2Element = document.createElement('h2');
divElement.appendChild(h2Element); 
sectionElement.appendChild(divElement);
h2Element.textContent = dubai.name;
var ulElement = document.createElement('ul');
divElement.appendChild(ulElement);
dubai.numberOfCustomers(dubai.maxCust);
dubai.avgCookiePerHour
var avgCookiesPerHourDubaiArray = [];
var hoursOfOperation = ['6am:', '7am:', '8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','8pm:']
var dubaiTotal = 0

for ( var i = 0; i < hoursOfOperation.length; i++){
    dubai.numberOfCustomers(dubai.maxCust);
    avgCookiesPerHourDubaiArray.push(dubai.avgCookiePerHour);
    var dubaiTotal = (dubaiTotal + avgCookiesPerHourDubaiArray[i]);
    console.log(hoursOfOperation[i] + ' - ' + avgCookiesPerHourDubaiArray[i] + ' cookies');
    
    var liElement = document.createElement('li');
    ulElement.appendChild(liElement);       
    liElement.textContent = hoursOfOperation[i] + ' - ' + avgCookiesPerHourDubaiArray[i] + ' cookies';
}
    var liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = 'Total - ' + dubaiTotal + ' cookies';




var paris = {
    name: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    avgCustPerHour: null,
    avgCookiePerHour: null,
    numberOfCustomers: function(limit){        
        var randomNumber = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + (this.minCust)); 
        this.avgCustPerHour = randomNumber;
        this.avgCookiePerHour = Math.round(randomNumber * this.avgCookie);
        return randomNumber;
    },
}
var sectionElement = document.getElementById("profile");
var divElement = document.createElement('div');
var h2Element = document.createElement('h2');
divElement.appendChild(h2Element); 
sectionElement.appendChild(divElement);
h2Element.textContent = paris.name;
var ulElement = document.createElement('ul');
divElement.appendChild(ulElement);
paris.numberOfCustomers(paris.maxCust);
paris.avgCookiePerHour
var avgCookiesPerHourParisArray = [];
var hoursOfOperation = ['6am:', '7am:', '8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','8pm:']
var parisTotal = 0

for ( var i = 0; i < hoursOfOperation.length; i++){
    paris.numberOfCustomers(paris.maxCust);
    avgCookiesPerHourParisArray.push(paris.avgCookiePerHour);
    var parisTotal = (parisTotal + avgCookiesPerHourParisArray[i]);
    console.log(hoursOfOperation[i] + ' - ' + avgCookiesPerHourParisArray[i] + ' cookies');
    
    var liElement = document.createElement('li');
    ulElement.appendChild(liElement);       
    liElement.textContent = hoursOfOperation[i] + ' - ' + avgCookiesPerHourParisArray[i] + ' cookies';
}
    var liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = 'Total - ' + parisTotal + ' cookies';

var lima = {
    name: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    avgCustPerHour: null,
    avgCookiePerHour: null,
    numberOfCustomers: function(limit){        
        var randomNumber = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + (this.minCust)); 
        this.avgCustPerHour = randomNumber;
        this.avgCookiePerHour = Math.round(randomNumber * this.avgCookie);
        return randomNumber;
    },
}
var sectionElement = document.getElementById("profile");
var divElement = document.createElement('div');
var h2Element = document.createElement('h2');
divElement.appendChild(h2Element); 
sectionElement.appendChild(divElement);
h2Element.textContent = lima.name;
var ulElement = document.createElement('ul');
divElement.appendChild(ulElement);
lima.numberOfCustomers(lima.maxCust);
lima.avgCookiePerHour
var avgCookiesPerHourLimaArray = [];
var hoursOfOperation = ['6am:', '7am:', '8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','8pm:']
var limaTotal = 0

for ( var i = 0; i < hoursOfOperation.length; i++){
    lima.numberOfCustomers(lima.maxCust);
    avgCookiesPerHourLimaArray.push(lima.avgCookiePerHour);
    var limaTotal = (limaTotal + avgCookiesPerHourLimaArray[i]);
    console.log(hoursOfOperation[i] + ' - ' + avgCookiesPerHourLimaArray[i] + ' cookies');
    
    var liElement = document.createElement('li');
    ulElement.appendChild(liElement);       
    liElement.textContent = hoursOfOperation[i] + ' - ' + avgCookiesPerHourLimaArray[i] + ' cookies';
}
    var liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = 'Total - ' + limaTotal + ' cookies';