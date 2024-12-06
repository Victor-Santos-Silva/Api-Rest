const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Cliente = require("./cliente");

const Contas = sequelize.define('Contas', {
    idConta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idCliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cliente,
            key: 'idCliente',
            defaultValue: 0.00,
        },
    },
    saldo: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    }
}, {
    timestamps: true,
})

module.exports = Contas;