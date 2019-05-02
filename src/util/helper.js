const api = require("./api");
const request = require("request");

const getRegion = city =>
  new Promise((resolve, reject) => {
    if (city) {
      return resolve({ city });
    }
    console.log(" City Not Mention Getting Result of Your Location");
    request(api.ipGeolocation, (err, res, body) => {
      if (err) return reject(err);
      const newRes = JSON.parse(body);
      if (!newRes) return reject(err);

      const regionDetails = {
        status: res.statusCode,
        continent: newRes.continent_name,
        country: newRes.country_name,
        provence: newRes.state_prov,
        district: newRes.district,
        city: newRes.city,
        zipcode: newRes.zipcode,
        location: {
          latitude: newRes.latitude,
          longitude: newRes.longitude
        }
      };
      resolve(regionDetails);
    });
  });
const getWether = city =>
  new Promise((resolve, reject) => {
    getCityKey(city)
      .then(res => {
        const City = res;
        request(
          api.weather + City.key + "?apikey=" + api.ACCUWEATHER_KEY,
          (err, res, body) => {
            if (err) return reject(err);
            const newRes = JSON.parse(body);
            if (!newRes) return reject("Unable to Get weather of " + city);
            const weatherObj = {
              City,
              forecast: newRes.DailyForecasts
            };
            resolve(weatherObj);
          }
        );
      })
      .catch(err => reject(err));
  });
const getCityKey = city =>
  new Promise((resolve, reject) => {
    request(api.cities + "&q=" + city, (err, res, body) => {
      if (err) return reject(err);
      const newRes = JSON.parse(body)[0];

      if (!newRes) return reject("City Not Found ----> " + city);
      const CityObj = {
        status: res.statusCode,
        key: newRes.Key,
        continent: newRes.Region.EnglishName,
        country: newRes.Country.EnglishName,
        provence: newRes.AdministrativeArea.EnglishName,
        city: newRes.EnglishName,
        location: {
          latitude: newRes.GeoPosition.Latitude,
          longitude: newRes.GeoPosition.Longitude
        }
      };
      resolve(CityObj);
    });
  });
const getNews = country =>
  new Promise((resolve, reject) => {
    request(
      api.newsApi + country + "&apiKey=" + api.NEWS_KEY,
      (err, res, body) => {
        if (err) return reject(err);
        const newRes = JSON.parse(body);
        if (!newRes) return reject("News Not Found ----> " + country);
        const newsObj = newRes.articles;
        resolve(newsObj);
      }
    );
  });
const getDetails = (param = null) =>
  new Promise((resolve, reject) => {
    getRegion(param)
      .then(cityRes => {
        const { city } = cityRes;
        getWether(city).then(weatherRes => {
          getNews(weatherRes.City.country).then(newsRes => {
            resolve({
              forecast: weatherRes,
              region: weatherRes.City,
              news: newsRes
            });
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
module.exports = getDetails;
