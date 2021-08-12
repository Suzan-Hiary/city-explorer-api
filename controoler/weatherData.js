'use strict';
const forecast = require ('../models/datamodal');


const weatherData =  (req, res) => {
    let lon = Number(req.query['lon']);
    let lat = Number(req.query['lat']);
    let searchQuery = '';

    if (req.query['q']) {
        searchQuery = req.query['q'];
    }
    const exploreCity = weather.find((item) => {
        return (item.city_name.toLowerCase() === searchQuery.toLowerCase() 
            // item.lat === lat ||
            // item.lon === lon

        )
    });
    console.log(exploreCity)

    const cleandata = []
    exploreCity.data.forEach(item => {
        let citydata = new forecast(item);
        cleandata.push(citydata);
    })
    res.send(cleandata);
}

modual.export = weatherData ;

