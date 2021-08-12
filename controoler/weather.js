'use strict';

const weatherController = (req, res) => {
    console.log(req.query);
    res.send(weather);
} ;

modual.export = weatherController ;