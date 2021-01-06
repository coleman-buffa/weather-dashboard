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



    function renderCityList() {
        $("#city-list").empty();

        for (var i = 0; i < cityList.length; i++) {
            var newLi = $("<li>");
            newLi.addClass("city-li");
            newLi.attr("data-name", cityList[i]);
            newLi.text(cityList[i]);
            $("#city-list").append(newLi);
        }
    }

   
});