// Wait for the page to load before doing anything else
$(document).ready(function() {
    
    var cityList = [];
    retrieveCityList();

    //Retrieve list of cities from local storage and assign to global variable
    //for function accessibility
    function retrieveCityList() {
        cityList = localStorage.getItem("history") === null ? [] : JSON.parse(localStorage.getItem("history"));
        renderCityList();
    }

    //Captures the user's entered city and stores in an array
    //Wish list: add local storage functionality    
    $("#city-button").on("click", function(event) {
        event.preventDefault();

        var city = $("#city-input").val().trim();
        cityList.push(city);

        $("#city-input").val("");

        if (cityList.length >=7) {
            cityList.shift();
            renderCityList();
        }
        localStorage.setItem("history", JSON.stringify(cityList));
        renderCityList();
        assignWeatherData(city);
    });

    //Renders the city list using entries in cityList array
    //Wish list: limit list so it shows only X most recent searches
    function renderCityList() {
        $("#city-list").empty();

        for (var i = 0; i < cityList.length; i++) {
            var newLi = $("<li>");
            newLi.addClass("city-li list-group-item");
            newLi.attr("data-name", cityList[i]);
            newLi.text(cityList[i]);
            $("#city-list").prepend(newLi);
        }
    }

    //Returns the time formatted MM/DD/YYYY given a UTC timestamp
    function renderTime(UTC) {
        var date = moment.unix(UTC).format("MM/DD/YYYY");
        return date;
    }

    //Click any of the City list items will call a series of functions that
    //will populate the page with weather data
    $(document).on("click", ".city-li", function () {
        var city = $(this).attr("data-name");
        assignWeatherData(city);
    });
    
    //Write weather data to the page
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

            var date = renderTime(response.dt);

            $("#city-name").text(response.name + " (" + date + ") ");
            $("#city-name").append(img);
            $("#temperature").text("Temperature: " + response.main.temp + "\xB0" + "F");
            $("#humidity").text("Humidity: " + response.main.humidity + "%");
            $("#windSpeed").text("Wind speed: " + response.wind.speed + " MPH");
            
            writeUV(response);
        });
    }

    //Writes UV index data to the page by accepting the request initiated by clicking on a city item
    function writeUV(promise) {
        var lat = promise.coord.lat;
        var lon = promise.coord.lon;

        writeForecast(lat, lon);

        var APIKey = "c8cbf2d95a5dea77ab7ea30913acbe6d";
        var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=alerts&appid=" + APIKey;

        $.ajax ({
            url:queryURL,
            method: "GET"
        }).then(function(response) {
            var uvIndex = response.current.uvi;
            $("#uvIndex").text("UV Index: ");
            var uvSpan = $("<span>").text(uvIndex);          
            if (uvIndex <= 2) {
                uvSpan.addClass("bg-success text-white");
            } else if (uvIndex > 2 && uvIndex <= 7) {
                uvSpan.addClass("bg-warning text-white");
            } else {
                uvSpan.addClass("bg-danger text-white");
            }
            $("#uvIndex").append(uvSpan)
        });       
    }

    //Gets and writes forecast data to the page
    function writeForecast (lat, lon) {
        var APIKey = "c8cbf2d95a5dea77ab7ea30913acbe6d";
        var forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat
             + "&lon=" + lon + "&units=imperial&appid=" + APIKey;
        
        $.ajax ({
            url:forecastURL,
            method: "GET"
        }).then(function(response) {

            $("#card-area").empty();

            //Add five days of forecasted data ignoring today's data
            for (var i = 1; i < 6; i++){
                var newCardDiv = $("<div>");
                newCardDiv.addClass("card forecast-card bg-primary m-1");
    
                var newCardBody = $("<div>");
                newCardBody.addClass("card-body");
    
                //Date
                var forecastDate = renderTime(response.daily[i].dt);
                var newCardTitle = $("<h6>");
                newCardTitle.addClass("card-title");
                newCardTitle.text(forecastDate);
                newCardBody.append(newCardTitle);
    
                //Icon
                var iconCode = response.daily[i].weather[0].icon;
                var iconURL = "http://openweathermap.org/img/wn/" + iconCode + ".png";
                var newCardIcon = $("<img>");
                newCardIcon.attr("src", iconURL);
                newCardBody.append(newCardIcon);
    
                //Temperature
                var forecastTemp = response.daily[i].temp.day;
                var newCardTemp = $("<p>");
                newCardTemp.addClass("card-text");                
                newCardTemp.text("Temp: " + forecastTemp + "\xB0" + "F");
                newCardBody.append(newCardTemp);
    
                //Humidity
                var forecastHumidity = response.daily[i].humidity;
                var newCardHumidity = $("<p>");
                newCardHumidity.addClass("card-text");
                newCardHumidity.text("Humidity: " + forecastHumidity + "%");
                newCardBody.append(newCardHumidity);

                newCardDiv.append(newCardBody);
                $("#card-area").append(newCardDiv);
            }
        });
    }   
});