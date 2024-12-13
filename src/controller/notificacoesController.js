const notificacoesService = require("../services/notificacoesService")

const notificacoesController = {
    create: async (req, res) => {
        try {
            const notificacao = await notificacoesService.create(req.body);
            return res.status(201).json({
                msg: 'Notificacao enviada com sucesso',
                notificacao,
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar enviar notificacao'
            })
        }
    },
    getAll: async (req, res) => {
        try {
            const notificacao = await notificacoesService.getAll();
            return res.status(200).json({
                msg: 'Todas as notificacoes!',
                notificacao
            });
        } catch (error) {
            return res.status(200).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },
    getOne: async (req, res) => {
        try {
            const notificacao = await notificacoesService.getById(req.params.id);
            if (!notificacao) {
                return res.status(400).json({
                    msg: 'Notificacao nao encontrado!'
                });
            }
            return res.status(200).json({
                msg: 'Notificacao encontrado',
                notificacao
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },
}

module.exports = notificacoesController;