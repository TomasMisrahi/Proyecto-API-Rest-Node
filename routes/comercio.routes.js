const { Router } = require('express');
const c = require('../controllers/comercio.controller');
const router = Router();

router.get('/', c.getComercios);
router.get('/:id', c.getComercioById);
router.post('/', c.createComercio);
router.put('/:id', c.updateComercio);
router.delete('/:id', c.deleteComercio);

module.exports = router;