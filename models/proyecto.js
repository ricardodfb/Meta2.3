'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proyecto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Proyecto.belongsToMany(models.Persona, { through: "donadores", as: "proyectos" });
      Proyecto.belongsToMany(models.Persona, { through: "donadores" });
    }
  }
  Proyecto.init({
    idProyecto: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Proyecto',
  });
  return Proyecto;
};