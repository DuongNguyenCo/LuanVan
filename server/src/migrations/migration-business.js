"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Businesses", {
      // id_service: DataTypes.INTEGER,
      // name: DataTypes.STRING,
      // phone: DataTypes.STRING(10),
      // email: DataTypes.STRING,
      // des: DataTypes.TEXT,
      // benefit: DataTypes.TEXT,
      // url: DataTypes.TEXT,
      // street: DataTypes.STRING,
      // ward: DataTypes.STRING,
      // district: DataTypes.STRING,
      // city: DataTypes.STRING,
      // password: DataTypes.STRING,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_service: {
        allowNull: false,
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
      benefit: {
        type: Sequelize.TEXT,
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
      password: {
        allowNull: false,
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
