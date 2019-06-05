var express = require('express')

var app = express();
app.set('views', __dirname)
app.set('view engine', 'pug')

//load all of routers/controller/middleware what have you.
app.use(require('../components/default/router'))
app.use(require('/api', 'app/errors/not-found'))

module.exports = app