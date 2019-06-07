var express = require('express')
  , router = express.Router()


  router.get('/', function(req, res){
    res.render('product/index')
  })
  router.get('/detail/:id', function(req, res) {
      res.render('product/product-detail')
  })

  module.exports = router