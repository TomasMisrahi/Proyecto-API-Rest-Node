const usuarioRoutes = require('./usuario.routes');
const comercioRoutes = require('./comercio.routes');
const ofertaRoutes   = require('./oferta.routes');

module.exports = function routerAPI(app) {
  app.use('/api/usuarios', usuarioRoutes);
  app.use('/api/comercios', comercioRoutes);
  app.use('/api/ofertas', ofertaRoutes);
};
