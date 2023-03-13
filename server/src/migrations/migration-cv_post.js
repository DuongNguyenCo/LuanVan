"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Cv_Posts", {
      id_post: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_cv: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      status: {
        defaultValue: -1,
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
    await queryInterface.dropTable("Cv_Posts");
  },
};
