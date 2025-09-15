const Comercio = require('../models/comercio');

const crearComercio = async ( request, response) =>{
    const body = request.body;
    const nuevoComercio =  new Comercio (body);
    const comercio = await nuevoComercio.save();

    response.json({ msg: "Comercio creado", data: comercio});
}

const obtenerComercios = async ( request, response) =>{
    const comercios = await Comercio.find();
    response.json( {data: comercios });
}

const comercioId = async ( request, response) => {
    const id = request.params.id;
    const local = await Comercio.findById(id);
    if( local){
        response.status(200).json( {data: local});
    } else {
        response.status(404).json({ msg: 'Comercio no Encontrado'});
    }
}

const borrarComercio = async ( request, response) => {
    const id = request.params.id;
    const local = await Comercio.findByIdAndDelete(id);
    if( local){
        response.status(200).json( {data: local});
    } else {
        response.status(404).json({ msg: 'Comercio no Encontrado'});
    }
}


const actualizarComercio = async ( request, response) => {
    const id = request.params.id;
    const body = request.body;

    const local = await Comercio.findByIdAndUpdate(id, body);
    if( local){
        response.status(200).json( {data: local});
    } else {
        response.status(404).json({ msg: 'Comercio no Encontrado'});
    }
}

module.exports = { 
  crearComercio, 
  obtenerComercios, 
  comercioId, 
  borrarComercio, 
  actualizarComercio 
};
