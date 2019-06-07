var express = require('express')
  , router = express.Router()

  router.get('/', function(req, res) {
      res.render('listings/listings')
  })

  module.exports = router