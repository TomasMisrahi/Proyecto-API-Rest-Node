const Usuario = require('../models/usuario');

const crearUsuario = async ( request, response) =>{
    const body = request.body;
    const nuevoUsuario =  new Usuario(body);
    const usuario = await nuevoUsuario.save();

    response.json({ msg: "Usuario creado", data: usuario});
}

const obtenerUsuarios = async ( request, response) =>{
    const usuarios = await Usuario.find();
    response.json( {data: usuarios });
}

const usuarioId = async ( request, response) => {
    const id = request.params.id;
    const user = await Usuario.findById(id);
    if( user){
        response.status(200).json( {data: user});
    } else {
        response.status(404).json({ msg: 'Usuario no Encontrado'});
    }
}

const borrarUsuario = async ( request, response) => {
    const id = request.params.id;
    const user = await Usuario.findByIdAndDelete(id);
    if( user){
        response.status(200).json( {data: user});
    } else {
        response.status(404).json({ msg: 'Usuario no Encontrado'});
    }
}


const actualizarUsuario = async ( request, response) => {
    const id = request.params.id;
    const body = request.body;

    const user = await Usuario.findByIdAndUpdate(id, body);
    if( user){
        response.status(200).json( {data: user});
    } else {
        response.status(404).json({ msg: 'Usuario no Encontrado'});
    }
}

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  usuarioId,
  borrarUsuario,
  actualizarUsuario
};
