const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class AniadeService {
  constructor() {}

  async create(data) {
    const nuevoAniade = await models.Aniade.create(data); // Crear el registro en la base de datos
    return nuevoAniade;
  }

  async find() {
    const aniades = await models.Aniade.findAll(
      
    ); // Obtener todos los registros
    return aniades;
  }

  async findOne(id_aniade) {
    const aniades = await models.Aniade.findOne(id_aniade,{
      
    }); 
    if (!aniades) {
      throw boom.notFound("Registro de aniade no encontrado");
    }
    return aniades;
  }
  async findOneByCarritoAndProducto(id_carrito, id_producto) {
    const aniade = await models.Aniade.findOne({
      where: {
        id_carrito: id_carrito,
        id_producto: id_producto
      }
    });
    if(!aniade){
      throw boom.notFound("Registro de aniade no encontrado");
    }
    return aniade;
  }
  

  async update(id_aniade, cambios) {
    const aniade = await this.findOne(id_aniade); // Obtener el registro existente

    if (!aniade) {
      throw boom.notFound("Añadido no encontrado");
    }

    const updatedAniade = await aniade.update(cambios); // Actualizar el registro con los cambios
    return updatedAniade;
  }

  async delete(id_aniade) {
    const aniade = await this.findOne(id_aniade); // Obtener el registro específico

    if (!aniade) {
      throw boom.notFound("Añadido no encontrado");
    }

    await aniade.destroy(); // Eliminar el registro
    return { id_aniade };
  }
}

module.exports = AniadeService;