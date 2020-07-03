const axios = require('axios');

const getLugarLatLong = async ( dir ) => {

    const encodeURL = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '7fba61cad6mshfb2776681d9b69bp1c715cjsn6d8543866c69',
            'useQueryString': true,
        }
      });

      const resp = await instance.get();
      const data = resp.data.Results;
      let direccion, lat, lng;
      if ( ! data ){
            direccion = "New York City, New York",
            lat = "40.750134";
            lng = "-73.997009";
        } else {
            data = data[0];
            direccion = data.name;
            lat = data.lat;
            lng = data.lon;
      }

      return {
          direccion,
          lat,
          lng
      }

}

module.exports = {
    getLugarLatLong,
}