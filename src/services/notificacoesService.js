const Notificacoes = require("../models/notificacoes");

const transacoesService = {
    create: async (notificacoes) => {
        try {
            return await Notificacoes.create(notificacoes);
        } catch (error) {
            throw new Error('Ocorreu um erro ao enviar notificacao');
        }
    },

    getById: async (id) => {
        try {
            const notificacao = await Notificacoes.findByPk(id);
            if (!notificacao) {
                return null;
            }
            return notificacao;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar uma unica notificacao');
        }
    },

    getAll: async () => {
        try {
            return await Notificacoes.findAll();
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar todas as notificacoes');
        }
    },

}

module.exports = transacoesService;