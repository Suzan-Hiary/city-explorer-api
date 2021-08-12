'use strict';


class forecast {
    constructor(location) {
        this.date = location.datetime;
        this.description = location.weather.description;
    }
}

modual.export = forecast ;