const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Contas = require('./contas');

const Transacoes = sequelize.define('Transacoes', {
    idTransacao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idConta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Contas,
            key: 'idConta',
        },
    },
    tipoConta: {
        type: DataTypes.ENUM(
            "Corrente",
            "Poupança",
            "Salário",
            "Mista",
            "Digital",
            "Universitária",
            "Conjunta",
            "Solidária"
        ),
        allowNull: false,
    },
    tipoTransacao: {
        type: DataTypes.ENUM("Depósito", "Saque", "Transferência", "Pagamento"),
        allowNull: false,
    },
    valor: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    dataTransacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    }
});

module.exports = Transacoes;