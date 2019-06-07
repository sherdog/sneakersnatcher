var express = require('express')
  , router = express.Router()

  router.get('/get/:id', function(req, res) {
      res.render('order-detail')
  })

  router.get('/', function(req, res) {
    res.render('orders/index')
  })

  module.exports = router