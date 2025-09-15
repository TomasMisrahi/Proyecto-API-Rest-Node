const { Router } = require('express');
const {
  crearUsuario,
  obtenerUsuarios,
  usuarioId,
  borrarUsuario,
  actualizarUsuario
} = require('../controllers/usuario.controller');

const router = Router();

router.get('/', obtenerUsuarios);
router.get('/:id', usuarioId);
router.post('/', crearUsuario);
router.put('/:id', actualizarUsuario);
router.delete('/:id', borrarUsuario);

module.exports = router;
