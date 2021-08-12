'use strict';

const express = require('express');
const app = express();
const axios = require('axios');
require("dotenv").config();
const PORT = process.env.PORT
const cors = require('cors');
const weather = require("./data/weather.json");
app.use(cors());
const weatherController = require ('./controoler/weather');
const weatherData = require ('./controoler/weatherData');



app.get("/", (req, res) => {
    res.send('server Working')
})

app.get("/weather", weatherController ())

app.get("/weather-data",weatherData())




app.listen(PORT, () => {
    console.log(`started server on ${PORT}`)
})
