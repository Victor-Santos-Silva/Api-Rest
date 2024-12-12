const { Router } = require("express");
const router = Router();
const clienteController = require("../controller/clienteController")
const { validateCliente, validadeClienteId } = require("../middlewares/validadeCliente")

router.post('/', validateCliente, clienteController.create); //funcao de criar

// funcao de editar
router.put('/:id', validateCliente, validadeClienteId, clienteController.update); // parametro id

// funcao de deletar
router.delete('/:id', validadeClienteId, clienteController.delete); // parametro id

// funcao buscar unico
router.get('/:id', validadeClienteId, clienteController.getOne); // parametro id

router.get('/', clienteController.getAll); // funcao buscar todos

module.exports = router;

