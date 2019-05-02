const IP_GEOLOCATION_KEY = "";
const ACCUWEATHER_KEY = ""; //limits
const NEWS_KEY = "";
module.exports = {
  ipGeolocation:
    "https://api.ipgeolocation.io/ipgeo?apiKey=" + IP_GEOLOCATION_KEY,
  cities:
    "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=" +
    ACCUWEATHER_KEY,
  weather: `http://dataservice.accuweather.com/currentconditions/v1/`,
  ACCUWEATHER_KEY,
  newsApi: "https://newsapi.org/v2/top-headlines?q=",
  NEWS_KEY
};
