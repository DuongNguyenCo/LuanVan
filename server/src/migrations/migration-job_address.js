"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Job_Addresses", {
      id_job: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_address: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Job_Addresses");
  },
};
