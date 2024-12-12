const Transacoes = require("../models/transacoes");

const transacoesService = {
    create: async (transferencia) => {
        try {
            return await Transacoes.create(transferencia);
        } catch (error) {
            throw new Error('Ocorreu um erro ao fazer transferencia');
        }
    },

    getById: async (id) => {
        try {
            const transferencia = await Transacoes.findByPk(id);
            if (!transferencia) {
                return null;
            }
            return transferencia;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar uma unica transferencia');
        }
    },

    getAll: async () => {
        try {
            return await Transacoes.findAll();
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar todas as transferencias');
        }
    },

}

module.exports = transacoesService;