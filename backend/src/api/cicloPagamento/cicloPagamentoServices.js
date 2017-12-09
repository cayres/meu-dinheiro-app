const CicloPagamento = require('./cicloPagamento')
const errorHandler = require('../common/errorHandler')

CicloPagamento.methods(['get', 'post', 'put', 'delete'])
CicloPagamento.updateOptions({
    new: true,
    runValidators: true
})

CicloPagamento.after('post', errorHandler).after('put', errorHandler).after('delete', errorHandler)

CicloPagamento.route('count', (req, resp, next) => {
    CicloPagamento.count((error, value) => {
        if (error) {
            resp.status(500).json({errors: [error]})
        }
        resp.json({valor: value})
    })
})

CicloPagamento.route('sumario', (req, resp, next) => {
    CicloPagamento.aggregate({
        $project: {
            credito: {$sum: "$creditos.valor"},
            debito: {$sum: "$debitos.valor"}
        }
    }, {
        $group: {
            _id: null,
            credito: {$sum: "$credito"},
            debito: {$sum: "$debito"}
        }
    }, {
        $project: { _id: false, credito:true, debito:true}
    }, (error, result) => {
        if (error) {
            resp.status(500).json({errors: [error]})
        }else{
            resp.json(result[0] || {credito: 0, debito: 0})
        }
    })
})

module.exports = CicloPagamento