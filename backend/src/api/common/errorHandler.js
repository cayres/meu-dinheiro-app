const _ = require('lodash')

const parseErros = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => {
        errors.push(error.message)
    })
    return errors
}

module.exports = (req, resp, next) => {
    const bundle = resp.locals.bundle
    
    if (bundle.errors) {
        const errors = parseErros(bundle.errors)
        resp.status(500).json({errors})
    }else{
        next()
    }
}