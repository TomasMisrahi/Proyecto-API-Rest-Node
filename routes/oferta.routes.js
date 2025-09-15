const { Router } = require('express');
const o = require('../controllers/oferta.controller');
const router = Router();

router.get('/', o.obtenerOferta);
router.get('/:id', o.ofertaId);
router.post('/', o.crearOferta);
router.put('/:id', o.actualizarOferta);
router.delete('/:id', o.borrarOferta);

module.exports = router;