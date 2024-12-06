const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Cliente = sequelize.define('Cliente', {
    idCliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nomeCliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

}, {
    timestamps: true,
});

module.exports = Cliente;