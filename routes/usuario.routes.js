const { Router } = require('express');
const u = require('../controllers/usuario.controller');

const router = Router();

router.get('/', u.obtenerUsuarios);
router.get('/:id', u.usuarioId);
router.post('/', u.crearUsuario);
router.put('/:id', u.actualizarUsuario);
router.delete('/:id', u.borrarUsuario);

module.exports = router;