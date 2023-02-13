"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("listfavos", {
      idcandidate: {
        primaryKey: true,
        references: {
          model: "candidates",
          key: "id",
        },
        type: Sequelize.INTEGER,
      },
      idpost: {
        primaryKey: true,
        references: {
          model: "posts",
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
    await queryInterface.dropTable("listfavos");
  },
};
