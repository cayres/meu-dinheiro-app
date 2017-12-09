const restful = require('node-restful')
const mongoose = restful.mongoose

const creditoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    valor: {type: Number, min: 0, required: true}
})

const debitoSchema = new mongoose.Schema({
    nome: {type:String, required: true},
    valor: {type: Number, min: 0, required: true},
    status: {type: String, required: false, uppercase: true,
         enum: ['PAGO', 'PENDENTE', 'AGENDADO'] },
    qntParcelas:  {type: Number, min: 0, required: true},
    numParcelas:  {type: Number, min: 0, required: true}
})

const cicloPagamentoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    mes: {type: Number, required: true, min: 1, max: 12},
    ano: {type: Number, required: true, min: 1960},
    creditos: [creditoSchema],
    debitos: [debitoSchema]
})

module.exports = restful.model('CicloPagamento', cicloPagamentoSchema)