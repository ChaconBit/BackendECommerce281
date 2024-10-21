const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class EntregaService {
  constructor() {}

  async create(data) {
    const nuevoEntrega = await models.Entrega.create(data); // Crear el registro en la base de datos
    return nuevoEntrega;
  }

  async find() {
    const entregas = await models.Entrega.findAll(); // Obtener todos los registros
    return entregas;
  }

  async findOne(id_entrega) {
    const entrega = await models.Entrega.findOne({
      where: { id_entrega },
    }); // Buscar un registro específico por id_entrega
    if (!entrega) {
      throw boom.notFound("Registro de entrega no encontrado"); // Ajuste en el mensaje de error
    }
    return entrega;
  }
//*********************  contacto de delivery ****************************
async ObtenerContactoDelivery(id_pedido) {
  // Buscar la entrega asociada al pedido
  const entrega = await models.Entrega.findOne({
      where: { id_pedido },
      include: [{
          model: models.Delivery, // Incluye el modelo de Delivery directamente
          as: "delivery"
      }]
  });

  if (!entrega || !entrega.delivery) {
      throw boom.notFound("Registro de entrega no encontrado o sin información de delivery");
  }

  // Acceso a los datos de delivery desde la entrega
  const deliveryInfo = entrega.delivery; // Asegurándonos que esto no sea undefined

  // Si necesitas formatear la información, puedes hacerlo aquí
  const delyveryContacto = {
      id_delivery: deliveryInfo.id_delivery,
      nombre_usuario: deliveryInfo.nombre_usuario,
      celular: deliveryInfo.celular,
      email_usuario: deliveryInfo.email_usuario,
  };

  return {
      delivery: delyveryContacto,
  };
}
//*************************************************
  async update(id_entrega, cambios) {
    const entrega = await this.findOne(id_entrega); // Obtener el registro existente

    // Actualizar el registro con los cambios
    const updatedEntrega = await entrega.update(cambios);
    return updatedEntrega;
  }

  async delete(id_entrega) {
    const entrega = await this.findOne(id_entrega); // Obtener el registro específico

    // Eliminar el registro
    await entrega.destroy();
    return { id_entrega };
  }
}

module.exports = EntregaService;
