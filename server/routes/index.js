const candidate = require('./candidate');
const post = require('./post');

module.exports = (router) => {
    candidate(router)
    post(router)
}