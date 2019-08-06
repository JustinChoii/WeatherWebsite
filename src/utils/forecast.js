const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/83356f9eb05aa31b686575469ad11959/" + encodeURIComponent(latitude) +  "," + encodeURIComponent(longitude);

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!');
        }
        else if (body.error){
            callback('Location is not found. Try another search', undefined);
        }
        else{
            callback(undefined, {
                summary: body.currently.summary,
                temperature: "The temperature is " + body.currently.temperature + " degrees out.",
                precipitation: "There is a " + body.currently.precipProbability + "% chance of rain.",
                windSpeed: body.currently.windSpeed,
                pressure: body.currently.pressure

            });
            // callback(undefined, response.body.daily.data[0].summary + '. It is currently ' +  response.body.currently.temperature + ' degrees out. There is a '+ response.body.currently.precipProbability + "% chance of rain.")
        }
    });
};

module.exports = forecast;