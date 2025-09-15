const Oferta = require('../models/oferta');


const crearOferta = async ( request, response) =>{
    const body = request.body;
    const nuevaOferta =  new Oferta (body);
    const oferta = await nuevaOferta.save();

    response.json({ msg: "Oferta creada", data: oferta});
}

const obtenerOferta = async ( request, response) =>{
    const ofertas = await Oferta.find();
    response.json( {data: ofertas });
}

const ofertaId = async ( request, response) => {
    const id = request.params.id;
    const promo = await Oferta.findById(id);
    if( promo){
        response.status(200).json( {data: promo});
    } else {
        response.status(404).json({ msg: 'Oferta no Encontrada'});
    }
}

const borrarOferta = async ( request, response) => {
    const id = request.params.id;
    const promo = await Oferta.findByIdAndDelete(id);
    if( promo){
        response.status(200).json( {data: promo});
    } else {
        response.status(404).json({ msg: 'Oferta no Encontrada'});
    }
}


const actualizarOferta = async ( request, response) => {
    const id = request.params.id;
    const body = request.body;

    const promo = await Oferta.findByIdAndUpdate(id, body);
    if( promo){
        response.status(200).json( {data: promo});
    } else {
        response.status(404).json({ msg: 'Oferta no Encontrada'});
    }
}


module.exports = { 
  obtenerOferta,
  ofertaId, 
  crearOferta, 
  actualizarOferta, 
  borrarOferta 
};
