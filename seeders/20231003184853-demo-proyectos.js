'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {   
    await queryInterface.bulkInsert('Proyectos', [
      {
        idProyecto: 1001,
        nombre: "Reforestación Amazonas",
        descripcion: "Reforestar el Amazonas después de los incendios ocurridos.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idProyecto: 1002,
        nombre: "Colecta de alimento",
        descripcion: "Colecta de alimento para perros y gatos sin hogar.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idProyecto: 1003,
        nombre: "Donación a casa hogar",
        descripcion: "Donaciones destinadas a cubrir los gastos de una casa hogar de niños.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
