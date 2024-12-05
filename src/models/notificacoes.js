const { DataTypes } = require("sequelize");
const sequelize = require("../config/database")

const Notificacao = sequelize.define('Notificacao', {
    mensagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataNotificacao: {
        
    }
})