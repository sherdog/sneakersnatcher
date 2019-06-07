var express = require('express')
  , router = express.Router()

  router.get('/', function(req, res) {
      res.render('login/index')
  })

  router.get('/account', function(req, res) {
      res.render('account')
  })

  module.exports = router