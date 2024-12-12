const { Router } = require("express");
const contasController = require("../controller/contasController")
const router = Router();

//funcao de criar
router.post('/', contasController.create);

// funcao de editar
router.put('/:id', contasController.update);

// funcao de deletar
router.delete('/:id', contasController.delete);

// funcao buscar unico
router.get('/:id', contasController.getOne);

//busca todos os admins
router.get('/', contasController.getAll);

module.exports = router;