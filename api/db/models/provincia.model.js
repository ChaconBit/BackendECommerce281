const { Model, DataTypes, Sequelize } = require("sequelize");
const { DEPARTAMENTO_TABLE } = require("./departamento.model");

const PROVINCIA_TABLE = "provincia";
const ProvinciaSchema = {
  id_provincia: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre_provincia: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  id_departamento: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: DEPARTAMENTO_TABLE,
      key: "id_departamento",
    },
    allowNull: false,
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Provincia extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: PROVINCIA_TABLE,
      modelName: "Provincia",
      timestamps: false,
    };
  }
}

module.exports = { Provincia, ProvinciaSchema, PROVINCIA_TABLE };