const Contas = require("../models/contas");

const contasService = {
    create: async (conta) => {
        try {
            return await Contas.create(conta);
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar conta');
        }
    },
    update: async (id, contaToUpdate) => {
        try {
            const conta = await Contas.findByPk(id);
            if (!conta) {
                return null;
            }
            await conta.update(contaToUpdate);
            await conta.save();
            return conta;
        } catch (error) {
            throw new Error('Ocorreu um erro ao atualizar conta');
        }
    },
    getById: async (id) => {
        try {
            const conta = await Contas.findByPk(id);
            if (!conta) {
                return null;
            }
            return conta;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar um unico conta');
        }
    },
    getAll: async () => {
        try {
            return await Contas.findAll();
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar todos os conta');
        }
    },
    delete: async (id) => {
        try {
            const conta = await Contas.findByPk(id);
            if (!conta) {
                return null;
            }
            await conta.destroy();
            return conta;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar o conta');
        }
    }
}

module.exports = contasService;