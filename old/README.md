# Weather Dashboard

This project represents an opportunity to practice using JQuery to dynamically generate content of the page well as a chance use API calls to bring information into the page. The practical application of these two learning objectives is the following weather dashboard. Upon arriving at the site the user will be greeted with a search bar that will allow them to search for a city. After pressing the return key the user will be treated with some basic weather conditions for the searched city as well as a forecast for the next five days. The city name will then be displayed in a list located under the search bar. Repeating the process with a new city name will replace all weather data with the new search add the city to the list pushing the previous entry down. This method of building the city list allows the most recent search to appear adjacent to the search bar. The list will keep track of the last 6 searches. Clicking on any of the saved city searches will populate the weather area with that city's data. The city search history is saved in local storage and will be loaded when the user returns to the site. See the gif below for a demonstration.

![Weather Dashboard Demonstration](weather-dashboard-demo.gif)

## Table of Contents

| |||
| :------------------------------ | :-------------------------| :-----------------------------------|
| [Project Introduction](#weather-dashboard) | [Table of Contents](#table-of-contents) | [Goals and Methods](#goals-and-methods) | 
| [Technologies](#technologies)   | [Deployed Link](#deployed-link) | [Authors](#authors) |
| [Acknowledgments](#acknowledgments) | [License](#license) |
---

## Goals and Methods

As stated in the project introduction the learning goals of this project were JQuery DOM traversal and manipulation as well as an opportunity to practice using AJAX to retrieve data and use it in the page. Both the city search history list and the five day forecast were added to the page dynamically as the result of user actions. This was accomplished by using JQuery to generate the appropriate HTML tag and assigning text values, useful attributes, and CSS classes. A snippet of the code that achieves this can be seen in Snippet 1:

Snippet 1
```javascript
var newLi = $("<li>");
newLi.addClass("city-li list-group-item");
newLi.attr("data-name", cityList[i]);
newLi.text(cityList[i]);
$("#city-list").prepend(newLi);
```
The other major learning objective of this project was to practice using AJAX requests to fetch data and use it building the page. OpenWeatherMap was selected as the API to use for this build as it included all the desired data at no cost, and because it uses JSON. The AJAX request required that the city name be included in the query URL which was parsed from the user's interaction using JQuery. Once the request was fulfilled the relevant data would be parsed and rendered the page accordingly. See Snippet 2 for a demonstration of how AJAX requests were made and how the response was parsed:

Snippet 2
```javascript
 function assignWeatherData (city) {
    var APIKey = "c8cbf2d95a5dea77ab7ea30913acbe6d";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city 
        + "&units=imperial&appid=" + APIKey;

    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response) {            
        var iconCode = response.weather[0].icon;
        var iconURL = "http://openweathermap.org/img/wn/" + iconCode + ".png";
        var img = $("<img>");
        img.attr("src", iconURL);
...
```

## Technologies 

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Bootstrap](https://getbootstrap.com/)
* [Jquery](https://jquery.com/)
* [OpenWeatherAPI](https://openweathermap.org/api)
* [Moment.js](https://momentjs.com/)

## Deployed Link

* [See Live Site](https://coleman-buffa.github.io/weather-dashboard/)

## Authors

Coleman Buffa

- [Link to Git Hub](https://github.com/coleman-buffa/)
- [Link to LinkedIn](https://www.linkedin.com/in/coleman-buffa-0a12a5201/)

## Acknowledgments

Many thanks to UCB Bootcamp Instructional and Support Staff

## License

* Bootstrap, JQuery, and moment.js are all released under the MIT license 

### [Back to Table of Contents](#table-of-contents)