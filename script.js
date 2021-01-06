// Wait for the page to load before doing anything
$(document).ready(function() {
    //All JS goes inside here
    
    
    var cityList = [];
    //Captures the user's entered city and stores in an array for later use    
    $("#city-button").on("click", function(event) {
        event.preventDefault();

        var city = $("#city-input").val().trim();
        cityList.push(city);

        $("#city-input").val("");

        renderCityList();
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

    $(document).on("click", ".city-li", function () {
        var APIKey = "c8cbf2d95a5dea77ab7ea30913acbe6d";
        var city = $(this).attr("data-name");
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;

        $.ajax ({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);

            //need image source url
            var iconCode = response.weather[0].icon;
            var iconURL = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
            var img = $("<img>");
            img.attr("src", iconURL);

            $("#city-name").text(response.name);
            $("#city-name").append(img);
            $("#temperature").text("Temperature: " + response.main.temp);
            $("#humidity").text("Humidity: " + response.main.humidity);
            $("#windSpeed").text("Wind speed: " + response.wind.speed);
            

        });

    });

   
});