"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("listlanguages", {
      idjob: {
        primaryKey: true,
        references: {
          model: "jobs",
          key: "id",
        },
        type: Sequelize.INTEGER,
      },
      idlanguage: {
        primaryKey: true,
        references: {
          model: "languages",
          key: "id",
        },
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("listlanguages");
  },
};
