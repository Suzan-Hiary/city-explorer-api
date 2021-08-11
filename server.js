'use strict';

const express = require('express');
const app = express();
const axios = require('axios');
require("dotenv").config();
const PORT = process.env.PORT
const cors = require('cors');
const weather = require("./data/weather.json");
app.use(cors());


// app.get("/", (req, res) => {
//     res.send('server Working')
// })

app.get("/weather", (req, res) => {
    console.log(req.query);
    res.send(weather);
})

app.get("/weather-data", (req, res) => {
    let lon = Number(req.query['lon']);
    let lat = Number(req.query['lat']);
    let searchQuery = '';

    if (req.query['q']) {
        searchQuery = req.query['q'];
    }
    const exploreCity = weather.find((item) => {
        return (item.city_name.toLowerCase() === searchQuery.toLowerCase() 
        //     (item.lat === lat )
        //    ( item.lon === lon))

        )
    });
    console.log(exploreCity)

    const cleandata = []
    exploreCity.data.forEach(item => {
        let citydata = new forecast(item);
        cleandata.push(citydata);
    })
    res.send(cleandata);
})




app.listen(PORT, () => {
    console.log(`started server on ${PORT}`)
})
class forecast {
    constructor(location) {
        this.date = location.datetime;
        this.description = location.weather.description;
    }
}