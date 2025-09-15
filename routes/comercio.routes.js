const { Router } = require('express');
const c = require('../controllers/comercio.controller');
const router = Router();

router.get('/', c.obtenerComercios);
router.get('/:id', c.comercioId);
router.post('/', c.crearComercio);
router.put('/:id', c.actualizarComercio);
router.delete('/:id', c.borrarComercio);

module.exports = router;
