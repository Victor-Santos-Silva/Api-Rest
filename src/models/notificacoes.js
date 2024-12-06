const { DataTypes } = require("sequelize");
const sequelize = require("../config/database")
const Cliente = require('./cliente')

const Notificacao = sequelize.define('Notificacao', {
    idNotificacao: {
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
        },
        onDelete: 'CASCADE',
    },
    mensagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataNotificacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: true,
});

module.exports = Notificacao;