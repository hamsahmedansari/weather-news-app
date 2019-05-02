const express = require("express");
const hbs = require("hbs");
const app = express();

const path = require("./util/path");
const helper = require("./util/helper");
// view engine
app.set("views", path.template + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(path.template + "/partials");
// routes
app.use(express.static(path.public)); //Static
app.get("/api/city", (req, res) => {
  const city = req.query.name;
  // helper(city).then(d => {
  //   res.send(d);
  // });
  const static = {
    forecast: {
      City: {
        status: 200,
        key: "261158",
        continent: "Asia",
        country: "Pakistan",
        provence: "Sindh",
        city: "Karachi",
        location: {
          latitude: 24.89,
          longitude: 67.029
        }
      },
      forecast: [
        {
          Date: "2019-05-02T07:00:00+05:00",
          EpochDate: 1556762400,
          Temperature: {
            Minimum: {
              Value: 77,
              Unit: "F",
              UnitType: 18
            },
            Maximum: {
              Value: 102,
              Unit: "F",
              UnitType: 18
            }
          },
          Day: {
            Icon: 2,
            IconPhrase: "Mostly sunny"
          },
          Night: {
            Icon: 37,
            IconPhrase: "Hazy moonlight"
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/pk/karachi/261158/daily-weather-forecast/261158?day=1&lang=en-us",
          Link:
            "http://www.accuweather.com/en/pk/karachi/261158/daily-weather-forecast/261158?day=1&lang=en-us"
        },
        {
          Date: "2019-05-03T07:00:00+05:00",
          EpochDate: 1556848800,
          Temperature: {
            Minimum: {
              Value: 76,
              Unit: "F",
              UnitType: 18
            },
            Maximum: {
              Value: 104,
              Unit: "F",
              UnitType: 18
            }
          },
          Day: {
            Icon: 5,
            IconPhrase: "Hazy sunshine"
          },
          Night: {
            Icon: 37,
            IconPhrase: "Hazy moonlight"
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/pk/karachi/261158/daily-weather-forecast/261158?day=2&lang=en-us",
          Link:
            "http://www.accuweather.com/en/pk/karachi/261158/daily-weather-forecast/261158?day=2&lang=en-us"
        },
        {
          Date: "2019-05-04T07:00:00+05:00",
          EpochDate: 1556935200,
          Temperature: {
            Minimum: {
              Value: 78,
              Unit: "F",
              UnitType: 18
            },
            Maximum: {
              Value: 100,
              Unit: "F",
              UnitType: 18
            }
          },
          Day: {
            Icon: 5,
            IconPhrase: "Hazy sunshine"
          },
          Night: {
            Icon: 37,
            IconPhrase: "Hazy moonlight"
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/pk/karachi/261158/daily-weather-forecast/261158?day=3&lang=en-us",
          Link:
            "http://www.accuweather.com/en/pk/karachi/261158/daily-weather-forecast/261158?day=3&lang=en-us"
        },
        {
          Date: "2019-05-05T07:00:00+05:00",
          EpochDate: 1557021600,
          Temperature: {
            Minimum: {
              Value: 79,
              Unit: "F",
              UnitType: 18
            },
            Maximum: {
              Value: 98,
              Unit: "F",
              UnitType: 18
            }
          },
          Day: {
            Icon: 1,
            IconPhrase: "Sunny"
          },
          Night: {
            Icon: 33,
            IconPhrase: "Clear"
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/pk/karachi/261158/daily-weather-forecast/261158?day=4&lang=en-us",
          Link:
            "http://www.accuweather.com/en/pk/karachi/261158/daily-weather-forecast/261158?day=4&lang=en-us"
        },
        {
          Date: "2019-05-06T07:00:00+05:00",
          EpochDate: 1557108000,
          Temperature: {
            Minimum: {
              Value: 80,
              Unit: "F",
              UnitType: 18
            },
            Maximum: {
              Value: 94,
              Unit: "F",
              UnitType: 18
            }
          },
          Day: {
            Icon: 1,
            IconPhrase: "Sunny"
          },
          Night: {
            Icon: 33,
            IconPhrase: "Clear"
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/pk/karachi/261158/daily-weather-forecast/261158?day=5&lang=en-us",
          Link:
            "http://www.accuweather.com/en/pk/karachi/261158/daily-weather-forecast/261158?day=5&lang=en-us"
        }
      ]
    },
    region: {
      status: 200,
      key: "261158",
      continent: "Asia",
      country: "Pakistan",
      provence: "Sindh",
      city: "Karachi",
      location: {
        latitude: 24.89,
        longitude: 67.029
      }
    },
    news: [
      {
        source: {
          id: "the-hindu",
          name: "The Hindu"
        },
        author: "Stanly Johny",
        title:
          "Analysis: Did China abandon Pakistan over Masood Azhar terror listing?",
        description:
          "Both India and China have manifested their desire to deepen bilateral ties despite the structural problems they face.",
        url:
          "https://www.thehindu.com/news/international/news-analysis-did-china-abandon-pakistan-over-masood-azhar-terror-listing/article27011513.ece",
        urlToImage:
          "https://www.thehindu.com/news/international/4rr77r/article27011512.ece/ALTERNATES/LANDSCAPE_615/CHINA-SILKROADBILATERALS",
        publishedAt: "2019-05-02T10:27:26Z",
        content:
          "After years of resistance to listing Masood Azhar, the founder of Pakistan-based terrorist group Jaish-e-Mohammed, as a global terrorist, China has finally changed it position. Earlier, the attempts to add Azhar to the UN blacklist, under the 1267 Committee, … [+4400 chars]"
      },
      {
        source: {
          id: "financial-times",
          name: "Financial Times"
        },
        author: null,
        title:
          "Narendra Modi seizes moment to trumpet victory on Pakistan militant chief",
        description:
          "China’s capitulation on terrorist designation should make ‘Indians proud’, says premier",
        url: "https://www.ft.com/content/4b578ed4-6ca2-11e9-80c7-60ee53e6681d",
        urlToImage:
          "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fprod-upp-image-read.ft.com%2F5ce7b210-6ca6-11e9-9ff9-8c855179f1c4?source=next-opengraph&fit=scale-down&width=900",
        publishedAt: "2019-05-02T10:08:13.7954063Z",
        content:
          "India’s Prime Minister Narendra Modi has seized the moment to trumpet victory following the UN Security Council’s decision to blacklist a Pakistan militant chief. \r\nThe UN on Wednesday designated Jaish-e-Mohammad (JeM) leader Masood Azhar as a global terroris… [+3603 chars]"
      },
      {
        source: {
          id: "google-news-in",
          name: "Google News (India)"
        },
        author: null,
        title:
          '"Win For Every Indian": Government On UN Blacklisting Of Masood Azhar',
        description:
          'Pakistan-based terrorist Masood Azhar\'s designation as a global terrorist by the UN Security Council is a "win for every Indian", Union Minister Arun Jaitley said on Thursday, hitting out at the opposition for "shameful and regrettable" comments.',
        url:
          "https://www.ndtv.com/india-news/masood-azhar-blacklisting-win-for-every-indian-says-government-2031807",
        urlToImage:
          "https://c.ndtvimg.com/2019-03/1vmkl63_masood-azhar-reuters_650x400_14_March_19.jpg",
        publishedAt: "2019-05-02T08:45:00+00:00",
        content:
          'Blacklisting Masood Azhar was the persistent efforts of the government and PM Modi, said Arun JaitleyNew Delhi: Pakistan-based terrorist Masood Azhar\'s designation as a global terrorist by the UN Security Council is a "win for every Indian", Union Minister Ar… [+2948 chars]'
      }
    ]
  };
  res.send(static);
});
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/error", (req, res) => {
  res.render("error");
});
app.get("*", (req, res) => {
  res.render("404");
});

// server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is running on Port ${port}`));
