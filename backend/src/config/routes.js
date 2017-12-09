const express = require('express')
const CicloPagamento = require('../api/cicloPagamento/cicloPagamentoServices')

module.exports = (server) => {
    const router = express.Router()
    server.use('/api', router)
    CicloPagamento.register(router, '/ciclosPagamentos')

}