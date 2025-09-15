const { Router } = require('express');
const {
  createUsuario,
  getUsuarios,
  getUsuarioById,
  deleteUsuarioById,
  updateUsuarioById
} = require('../controllers/usuario.controller');

const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuarioById);
router.post('/', createUsuario);
router.put('/:id', updateUsuarioById);
router.delete('/:id', deleteUsuarioById);

module.exports = router;
