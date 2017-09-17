const request = require("request");

var getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/fbdb6baaa07efe8ca945c111a8c630ca/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: toCelsius(body.currently.temperature),
          apparentTemperature: toCelsius(body.currently.apparentTemperature)
        });
      } else {
        callback("Unable to connect to Weather API");
      }
    }
  );
};

function toCelsius(f) {
  return parseInt(5 / 9 * (f - 32));
}

module.exports = {
  getWeather
};
