"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Businesses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING(10),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      des: {
        type: Sequelize.TEXT,
      },
      pass: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      url: {
        type: Sequelize.TEXT,
      },
      street: {
        type: Sequelize.STRING,
      },
      ward: {
        type: Sequelize.STRING,
      },
      district: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Businesses");
  },
};
