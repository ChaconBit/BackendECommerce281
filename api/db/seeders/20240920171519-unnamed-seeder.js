"use strict";

const { generarAdministrador } = require("../data/administrador.data");
// const { generarArtesano } = require("../data/artesano.data");
const { generarCliente } = require("../data/cliente.data");
// const { generarComunidad} = require("../data/comunidad.data");
const { generarDelivery } = require("../data/delivery.data");
// const { generarDepartamento } = require("../data/departamento.data");
// const { generarMunicipio } = require("../data/municipio.data");
// const { generarNotificacion} = require("../data/notificacion.data");
// const { generarProducto } = require("../data/producto.data");
// const { generarPromocion} = require("../data/promocion.data");
// const { generarProvincia } = require("../data/provincia.data");


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    // const departamentoData = await generarDepartamento();
    // await queryInterface.bulkInsert("departamento", departamentoData);
    // const provinciaData = await generarProvincia();
    // await queryInterface.bulkInsert("provincia", provinciaData);
    // const municipioData = await generarMunicipio();
    // await queryInterface.bulkInsert("municipio", municipioData);
    // const comunidadData = await generarComunidad();
    // await queryInterface.bulkInsert("comunidad", comunidadData);

    
    const administradorData = await generarAdministrador();
    await queryInterface.bulkInsert("administrador", administradorData);
    const clienteData = await generarCliente();
    await queryInterface.bulkInsert("cliente", clienteData);
    const deliveryData = await generarDelivery();
    await queryInterface.bulkInsert("delivery", deliveryData);
    // const artesanoData = await generarArtesano();
    // await queryInterface.bulkInsert("artesano", artesanoData);

    // const productoData = await generarProducto();
    // await queryInterface.bulkInsert("promocion", promocionData);
    // await queryInterface.bulkInsert("notificacion", notificacionData);
    // const notificacionData = await generarNotificacion();
    // await queryInterface.bulkInsert("producto", productoData);
    // const promocionData = await generarPromocion();
  
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("administrador", null);
    await queryInterface.bulkDelete("cliente", null);
    await queryInterface.bulkDelete("delivery", null);
  },
};
