'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class donatarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  donatarios.init({
    proyectoId: DataTypes.INTEGER,
    personaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'donatarios',
  });
  return donatarios;
};