const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true,
    }
}).argv;

const getInfo = async (direccion) => {

    try {
        const coord = await lugar.getLugarLatLong(direccion);
        const temp = await clima.getClimaLatLong(coord.lat, coord.lng);

        return `El clima de ${direccion} es ${temp}`;
    } catch( err ){
        throw new Error(`No se pudo determinar el clima de ${direccion}`);
    }

}

getInfo(argv.direccion)
    .then( console.log )
    .catch( console.log);
