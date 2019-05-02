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
  }

  function updateForecastView({ forecast } = []) {
    const viewweathericon = $("#view-weather-icon");
    const viewweathertemperature = $("#view-weather-temperature");
    const viewweatherphase = $("#view-weather-phase");
    const viewweatherdatetime = $("#view-weather-date-time");

    // setting image/icon
    viewweathericon.attr("src", getImageUrl(forecast));
    // setting temperature
    const temperatureF =
      (Number(forecast[0].Temperature.Maximum.Value) +
        Number(forecast[0].Temperature.Minimum.Value)) /
      2;
    viewweathertemperature.html(Math.round(temperatureF));
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
  function getImageUrl(forecast) {
    let imgNum = null;
    if (isDay()) {
      imgNum =
        forecast[0].Day.Icon < 10
          ? "0".concat(forecast[0].Day.Icon)
          : forecast[0].Day.Icon;
    } else {
      imgNum =
        forecast[0].Night.Icon < 10
          ? "0".concat(forecast[0].Night.Icon)
          : forecast[0].Night.Icon;
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
  //
  searchByCity();
});
