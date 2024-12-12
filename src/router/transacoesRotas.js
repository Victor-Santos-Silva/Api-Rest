const { Router } = require("express");
const transacoesController = require("../controller/transacoesController")
const router = Router();

router.post('/', transacoesController.create);

router.get('/', transacoesController.getAll);

router.get('/:id', transacoesController.getOne);

module.exports = router;