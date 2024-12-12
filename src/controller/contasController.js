const contasService = require("../services/contasService")

const contasController = {
    create: async (req, res) => {
        try {
            const conta = await contasService.create(req.body);
            return res.status(201).json({
                msg: 'Conta criado com sucesso',
                conta
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar o conta'
            })
        }
    },
    update: async (req, res) => {
        try {
            const conta = await contasService.update(req.params.id, req.body);
            if (!conta) {
                return res.status(400).json({
                    msg: 'Conta nao encontrado'
                });
            }
            return res.status(200).json({
                msg: 'Conta atualizado com sucesso',
                conta
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao atualizar o cliente'
            })
        }
    },
    getAll: async (req, res) => {
        try {
            const contas = await contasService.getAll();
            return res.status(200).json({
                msg: 'Todas as Contas!',
                contas
            });
        } catch (error) {
            return res.status(200).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },
    getOne: async (req, res) => {
        try {
            const conta = await contasService.getById(req.params.id);
            if (!conta) {
                return res.status(400).json({
                    msg: 'Conta nao encontrado!'
                });
            }
            return res.status(200).json({
                msg: 'Conta encontrado',
                conta
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },
    delete: async (req, res) => {
        try {
            const conta = await contasService.delete(req.params.id);
            if (!conta) {
                return res.status(400).json({
                    msg: 'Conta nao encontrado'
                })
            }
            return res.status(200).json({
                msg: 'Conta deletado com sucesso!'
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    }
}

module.exports = contasController;