'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Personas', [
      {
        rfc: "FEBR030330",
        nombre: "Ricardo Ferrel",
        cantidadDonada: 30000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rfc: "ROML2608",
        nombre: "Miguel Romero",
        cantidadDonada: 35700,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rfc: "LOPA2008",
        nombre: "Mabel López",
        cantidadDonada: 38700,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /*
    await queryInterface.bulkDelete('People', null, {});
    */
  }
};
