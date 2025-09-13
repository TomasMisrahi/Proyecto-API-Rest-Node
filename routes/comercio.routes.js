const { Router } = require('express');
const router = Router();

// Endpoints de prueba
router.get('/', (req, res) => {
  res.json({ ok: true, recurso: 'comercios', accion: 'listar' });
});

module.exports = router;
