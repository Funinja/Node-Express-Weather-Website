const request = require('request');

const geocode = (address, callback) => { //need URI encoding just incase user puts url weird addresses
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) +".json?access_token=pk.eyJ1IjoiZnVuaW5qYXBwbGUiLCJhIjoiY2tydjJnZDB3MDJrNDJvcjBxZDI3M3IzbyJ9.XJkezJUKp0v3g6w7qXyWEg&limit=1"

    request({url, json: true}, (error, response) => {
        if (error){
            callback("Unable to connect to location services", undefined);
        }else if (response.body.features.length === 0)
        {
            callback("Unable to find location. Try another search.", undefined);
        }else{

            const { center, place_name: location  } = response.body.features[0];

            callback(undefined, {
                latitude: center[1],
                longitude: center[0],
                location
            })

        }
    })
}

module.exports = geocode;