function salmonCitiesInfo(city, minCusto, maxCusto,avgCookies) {
var cityName = {
    name: city,
    minCust: minCusto,
    maxCust: maxCusto,
    avgCookie: avgCookies,
    avgCustPerHour: null,
    avgCookiePerHour: null,
    numberOfCustomers: function(limit){        
        var randomNumber = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + (this.minCust)); 
        this.avgCustPerHour = randomNumber;
        this.avgCookiePerHour = Math.round(randomNumber * this.avgCookie);
        return randomNumber;
    },
}
console.log(city);
var sectionElement = document.getElementById("profile");
var divElement = document.createElement('div');
var h2Element = document.createElement('h2');
divElement.appendChild(h2Element); 
sectionElement.appendChild(divElement);
h2Element.textContent = city;
var ulElement = document.createElement('ul');
divElement.appendChild(ulElement);
cityName.numberOfCustomers(cityName.maxCust);
cityName.avgCookiePerHour
var avgCookiesPerHourcityNameArray = [];
var hoursOfOperation = ['6am:', '7am:', '8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','8pm:']
var cityNameTotal = 0

for ( var i = 0; i < hoursOfOperation.length; i++){
    cityName.numberOfCustomers(cityName.maxCust);
    avgCookiesPerHourcityNameArray.push(cityName.avgCookiePerHour);
    var cityNameTotal = (cityNameTotal + avgCookiesPerHourcityNameArray[i]);
    console.log(hoursOfOperation[i] + ' - ' + avgCookiesPerHourcityNameArray[i] + ' cookies');
    
    var liElement = document.createElement('li');
    ulElement.appendChild(liElement);       
    liElement.textContent = hoursOfOperation[i] + ' - ' + avgCookiesPerHourcityNameArray[i] + ' cookies';
}
    var liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = 'Total - ' + cityNameTotal + ' cookies';
}
salmonCitiesInfo('Seattle', 23, 65, 6.7);
salmonCitiesInfo('Tokyo',3,24,1.2);
salmonCitiesInfo('Dubai',11,38,3.7);
salmonCitiesInfo('Paris',20,28,2.3);
salmonCitiesInfo('Lima',2,16,4.6);


// function testFunction(a, b){
//     console.log(a + b);

// }
// testFunction('word', 4)