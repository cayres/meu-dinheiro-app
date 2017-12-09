const mongoose = require('mongoose')
// Necessitava na versão usada na video aula, vamos ver se da certo.
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/meudinheiro', {
    useMongoClient: true
})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."

mongoose.Error.messages.Number.min = 
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."

mongoose.Error.messages.Number.max = 
    "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."

mongoose.Error.messages.Number.min = 
    "'{VALUE}' não é válido para o atributo '{PATH}'."