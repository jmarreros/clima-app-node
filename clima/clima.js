const axios = require('axios');

const getClimaLatLong = async ( lat, lng ) => {

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3a63a25e8933f395cdcd84ec1506cd62&units=metric`,
      });

      const resp = await instance.get();

      return resp.data.main.temp;
}

module.exports = {
    getClimaLatLong,
}