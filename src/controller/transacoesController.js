const transacoesService = require("../services/transacoesService")

const transacoesController = {
    create: async (req, res) => {
        try {
            const transferencia = await transacoesService.create(req.body);
            return res.status(201).json({
                msg: 'Transferencia feita com sucesso',
                transferencia
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar fazer transferencia'
            })
        }
    },
    getAll: async (req, res) => {
        try {
            const transferencia = await transacoesService.getAll();
            return res.status(200).json({
                msg: 'Todas as Transferencias!',
                transferencia
            });
        } catch (error) {
            return res.status(200).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },
    getOne: async (req, res) => {
        try {
            const transferencia = await transacoesService.getById(req.params.id);
            if (!transferencia) {
                return res.status(400).json({
                    msg: 'Transferencia nao encontrado!'
                });
            }
            return res.status(200).json({
                msg: 'Transferencia encontrado',
                transferencia
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },
}

module.exports = transacoesController;