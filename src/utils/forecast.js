const request = require('request');

const forecast = (longitude, latitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=0a9275d4360d2bc6950b120763fbede6&query='+ longitude + ','+ latitude +'&units=m';
    
    request({url, json: true}, (error, response) =>{
        const {weather_descriptions, temperature, feelslike} = response.body.current;
        if (error){
            callback("Unable to connect to weather services", undefined);
        }else if(response.body.error){
            callback("Unable to find coordinates", undefined);
        }else{
            const data = weather_descriptions[0] + ". It is currently " + temperature + " degrees out. It feels like " + feelslike + " degrees out.";  
            callback(undefined, data);
        }


    });

}

module.exports = forecast;