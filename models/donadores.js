'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class donadores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  donadores.init({
    proyectoId: DataTypes.INTEGER,
    personaId: DataTypes.INTEGER,
    cantidadDonada: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'donadores',
  });
  return donadores;
};