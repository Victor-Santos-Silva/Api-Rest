const { Router } = require("express");
const notificacaoController = require("../controller/notificacoesController")
const router = Router();

router.post('/', notificacaoController.create);

router.get('/', notificacaoController.getAll);

router.get('/:id', notificacaoController.getOne);

module.exports = router;