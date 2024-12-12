const Cliente = require("../models/cliente");

const clienteService = {
    create: async (cliente) => {
        try {
            return await Cliente.create(cliente);
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar cliente');
        }
    },
    update: async (id, userToUpdate) => {
        try {
            const cliente = await Cliente.findByPk(id);
            if (!cliente) { // user for vazio
                return null;
            }
            await cliente.update(userToUpdate); //update atualizar
            await cliente.save(); // so para ter certeza que esta faltando, mas é opcioanl
            return cliente;
        } catch (error) {
            throw new Error('Ocorreu um erro ao atualizar cliente');
        }
    },
    getById: async (id) => {
        try {
            const cliente = await Cliente.findByPk(id);
            if (!cliente) {
                return null;
            }
            return cliente;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar um unico cliente');
        }
    },
    getAll: async () => {
        try {
            return await Cliente.findAll();
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar todos os clientes');
        }
    },
    delete: async (id) => {
        try {
            const cliente = await Cliente.findByPk(id);
            if (!cliente) {
                return null;
            }
            await cliente.destroy();
            return cliente;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar o cliente');
        }
    }
}

module.exports = clienteService;