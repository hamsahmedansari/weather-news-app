$(document).ready(() => {
  const searchInput = $(".search-input");
  const searchBtn = $(".search-btn");
  const searchForm = $(".search-form");

  searchForm.on("submit", e => {
    e.preventDefault();
    if (searchInput.val() === "") {
      return false;
    }
    searchByCity();
  });
  searchBtn.on("click", e => {
    if (searchInput.val() === "") {
      return false;
    }
    searchByCity();
  });

  function searchByCity() {
    const searchValue = String(searchInput.val())
      .trim()
      .toLowerCase();
    searchInput.val("");
    fetch(`${location.href}api/city?name=${searchValue}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        updateView(res);
      })
      .catch(error => {
        console.error(error);
      });
  }

  function updateView({ forecast, news, region }) {
    updateForecastView(forecast);
    updateRegionView(region);
    updateForecastOwl(forecast);
  }
  function updateForecastOwl({ forecast }) {
    destroyOwlForecast();
    const owlforecast = $(".owl-forecast");
    let tempHtml = "";
    forecast.forEach(element => {
      tempHtml += `
      <div class="p-2">
                        <p>${getDate(element.Date)}</p>
                        <p class="text-left"><img style="max-width: 90px;margin-left: -27px;" src="${getImageUrl(
                          element.Day.Icon,
                          element.Night.Icon
                        )}"/></p>
                        <h3><span class="view-temperature">${getTemperatureF(
                          element.Temperature.Maximum.Value,
                          element.Temperature.Minimum.Value
                        )}</span>&#176;<span class="view-temperature-icon" >F</span> </h3>
                        <p>${
                          isDay()
                            ? element.Day.IconPhrase
                            : element.Night.IconPhrase
                        }</p>
                        </div>`;
    });
    owlforecast.html(tempHtml);
    createOwlForecast();
  }
  function updateForecastView({ forecast } = []) {
    const viewweathericon = $("#view-weather-icon");
    const viewweathertemperature = $("#view-weather-temperature");
    const viewweatherphase = $("#view-weather-phase");
    const viewweatherdatetime = $("#view-weather-date-time");

    // setting image/icon
    viewweathericon.attr(
      "src",
      getImageUrl(forecast[0].Day.Icon, forecast[0].Night.Icon)
    );
    // setting temperature

    viewweathertemperature.html(
      getTemperatureF(
        forecast[0].Temperature.Maximum.Value,
        forecast[0].Temperature.Minimum.Value
      )
    );
    // setting parser
    viewweatherphase.html(getWeatherPace(forecast));

    viewweatherdatetime.html(getDate(forecast[0].Date));
  }
  function updateRegionView(region) {
    const viewregioncountrydetails = $("#view-region-country-details");
    const viewregioncountry = $("#view-region-country");
    const viewregioncontinent = $("#view-region-continent");
    const viewregionstate = $("#view-region-state");
    const viewregioncountrynews = $("#view-region-country-news");
    const viewregionlocation = $("#view-region-location");

    viewregioncountrydetails.html(`${region.city},${region.country}`);
    viewregioncountry.html(region.country);
    viewregioncountrynews.html(region.country);
    viewregioncontinent.html(region.continent);
    viewregionstate.html(region.provence);
    viewregionlocation.html(
      `${region.location.latitude},${region.location.longitude}`
    );
  }
  function getImageUrl(day, night) {
    let imgNum = null;
    if (isDay()) {
      imgNum = day < 10 ? "0".concat(day) : day;
    } else {
      imgNum = night < 10 ? "0".concat(night) : night;
    }
    return `https://developer.accuweather.com/sites/default/files/${imgNum}-s.png`;
  }
  function getWeatherPace(forecast) {
    if (isDay()) {
      return forecast[0].Day.IconPhrase;
    }
    return forecast[0].Night.IconPhrase;
  }
  function isDay() {
    const hours = new Date().getHours();
    return hours > 6 && hours < 20;
  }
  function getDate(param) {
    const date = new Date(param);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + " " + monthNames[monthIndex] + ", " + year;
  }
  function getTemperatureF(max, min) {
    const temperatureF = (Number(max) + Number(min)) / 2;
    return Math.round(temperatureF);
  }
  //
  searchByCity();
});
