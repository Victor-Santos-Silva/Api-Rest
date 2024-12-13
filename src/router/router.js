const { Router } = require("express");
const adminRoutes = require("./adminRotas")
const clienteRoutes = require("./clienteRotas")
const contasRotas = require("./contasRotas")
const transacoesRotas = require("./transacoesRotas")
const notificacao = require("./notificacoesRotas")


const router = Router();

router.use('/admin', adminRoutes);
router.use('/cliente', clienteRoutes);
router.use('/contas', contasRotas);
router.use('/transacao', transacoesRotas);
router.use('/notificacao', notificacao);

module.exports = router;