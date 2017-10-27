


let getWeather = function() {
  let latitude = '41.8781';
  let longitude = '-87.6298';
  let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  openweathermap_api_url += 'lat=' + latitude
  openweathermap_api_url += '&lon=' + longitude
  openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'

  fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
}
let convertToJSON = function(response) {
  return response.json();
}

let updateWeather = function(dataFromService) {
  console.info(dataFromService)
  // City name
  city = dataFromService.name;
  console.info(city)
  let city_div = document.getElementById("get_city");
  city_div.innerHTML = city;

  // Temperature
  temperature = dataFromService.main.temp.toFixed(0);
  console.info(temperature)
    let temp_div = document.getElementById("get_temp");
  temp_div.innerHTML = "It is " + temperature + " degrees outside"
}

let displayError = function(error) {
  console.debug(error);
  // window.alert("Sorry, something went wrong.");
}

let link = document.getElementById("get_forecast")
link.addEventListener("click", function(event) {
    event.preventDefault();
    getWeather();
    navigator.geolocation.getCurrentPosition(handlePosition);
})

let handlePosition = function(info) {
  console.info(info)
  // let latitude = info.coords.latitude.toFixed(4)
  // let longitude = info.coords.longitude.toFixed(4)
  // console.info(latitude)
  // console.info(longitude)
  console.log("Latitude: "+info.coords.latitude)
  console.log("Longitude: "+info.coords.longitude)
  // let div = document.getElementById("weather");
  // let url = "https://maps.googleapis.com/maps/api/staticmap?center=" + info.coords.latitude.toFixed(4) + "," + info.coords.longitude.toFixed(4) + "&zoom=15&size=600x400&maptype=hybrid&key=AIzaSyBrLfaqBHZNoiI8463XDdy57fJHiwA8vy4"
  // div.innerHTML = "<img src=\"" + url + "\">";
};

// HINT:
// Weather icon example: http://openweathermap.org/img/w/10d.png
// The very last part ('10d.png') can change based on the current conditions.
