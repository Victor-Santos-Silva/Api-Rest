const { Router } = require("express");
const adminRoutes = require("./adminRotas")
const clienteRoutes = require("./clienteRotas")
const contasRotas = require("./contasRotas")
const transacoesRotas = require("./transacoesRotas")


const router = Router();

router.use('/admin', adminRoutes);
router.use('/cliente', clienteRoutes);
router.use('/contas', contasRotas);
router.use('/transacao', transacoesRotas);

module.exports = router;