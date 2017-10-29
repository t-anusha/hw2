let getWeather = function (info) {
  var latitude = info.coords.latitude.toFixed(4)
  var longitude = info.coords.longitude.toFixed(4)
  let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  openweathermap_api_url += 'lat=' + latitude
  openweathermap_api_url += '&lon=' + longitude
  openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'
  // console.info(openweathermap_api_url)
  fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
};

let convertToJSON = function(response) {
  return response.json();
}

let updateWeather = function(dataFromService) {
  // console.info(dataFromService)
  // City name
  city = dataFromService.name;
  let city_div = document.getElementById("get_city");
  city_div.innerHTML = city;
  // Temperature
  temperature = dataFromService.main.temp.toFixed(0);
  let temp_div = document.getElementById("get_temp");
  temp_div.innerHTML = "It is " + temperature + " degrees outside"
  // Icon
  icon = dataFromService.weather[0].icon
  icon_url = "http://openweathermap.org/img/w/"+icon+".png"
  document.querySelector('.card-img-top').src=icon_url

  console.log("Latitude: "+dataFromService.coord.lat);
  console.log("Longitude: "+dataFromService.coord.lon);
}

let displayError = function(error) {
  console.debug(error);
  // window.alert("Sorry, something went wrong.");
}

let link = document.getElementById("get_forecast")
link.addEventListener("click", function(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getWeather);
});



// HINT:
// Weather icon example: http://openweathermap.org/img/w/10d.png
// The very last part ('10d.png') can change based on the current conditions.
