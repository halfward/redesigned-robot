// accessing elements in the DOM
let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");
let form = document.querySelector("form");
let image = document.querySelector("img");

let CITY_NAME = document.querySelector(".city-name");
let CITY_TEMP = document.querySelector(".temperature");

// write a function to get weather data
  const getWeatherData = (zip) => {
    //store open weather API Key
    let API_KEY = config.WEATHER_API_KEY
    let API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${API_KEY}`;

    fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      let WEATHER_ICON = local_weather_data.weather[0].icon
      image.setAttribute('src', 'https://openweathermap.org/img/wn/${WEATHER_ICON}@2x.png')
      // store the data in a variable
      let local_weather_data = data;
      // city name content   
      CITY_NAME.textContent = local_weather_data.name;
      //process the temp data before manipulation
      let weather_in_celcius = Math.round(
        local_weather_data.main.temp - 273
      );
      CITY_TEMP.textContent = weather_in_celcius + "C"
  });
  form.reset();
  input.focus();
}

const getZipCode = e => {
  e.preventDefault();
  let ZIP_CODE = input.value;
  getWeatherData(ZIP_CODE);
}

btn.addEventListener('click', getZipCode);