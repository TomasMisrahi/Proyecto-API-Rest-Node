const { Router } = require('express');
const o = require('../controllers/oferta.controller');
const router = Router();

router.get('/', o.getOfertas);
router.get('/:id', o.getOfertaById);
router.post('/', o.createOferta);
router.put('/:id', o.updateOferta);
router.delete('/:id', o.deleteOferta);

module.exports = router;