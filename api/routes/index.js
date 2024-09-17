const express = require('express');


const administradorRouter = requite('./administrador.router');
const carritoRouter = require('./producto.router');
const clienteRouter = require('./cliente.router');
const comunidadRouter = require('./comunidad.router');
const deliveryRouter = require('./delivery.router');
const municipioRouter = require('./municipio.router');
const notificacionRouter = require('./notificacion.router')
const pagoRouter = require('./pago.router');
const pedCliDelRouter = require('./ped_cli_del.router');
const pedNotRouter = require('./ped_not(tiene).router');
const pedidoRouter = require('./pedido.router');
const proPromCliCarRouter = require('./pro_prom_cli_car.router');
const productoRouter = require('./producto.router');
const promocionRouter = require('./promocion.router');
const provinciaRouter = require('./provincia.router');
const reseniaRouter = require('./resenia.router');
const usuNorAdminRouter = require('./usu_nor_Admin.router');
const usuarioRouter = require('./usuario.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/administrador', administradorRouter);
  router.use('/carrito', carritoRouter);
  router.use('/cliente', clienteRouter);
  router.use('/comunidad', comunidadRouter);
  router.use('/delivery', deliveryRouter);
  router.use('/municipio', municipioRouter);
  router.use('/notificiacion', notificacionRouter);
  router.use('/cliente', clienteRouter);
  router.use('/pago', pagoRouter);
  router.use('/pedCliDel', pedCliDelRouter);
  router.use('/pedNot',pedNotRouter);
  router.use('/pedido', pedidoRouter);
  router.use('/proPromCliCar', proPromCliCarRouter);
  router.use('/producto', productoRouter);
  router.use('/promocion',promocionRouter);
  router.use('/provincia', provinciaRouter);
  router.use('/resenia', reseniaRouter);
  router.use('/usuNorAdmin', usuNorAdminRouter);
  router.use('/usuario', usuarioRouter);




}

module.exports = routerApi;