
var express = require('express')
var join = require('path').join


var router = new express.Router();

router.use('/listings', require('./components/listings/listings_routes'))
router.use('/login', require('./components/login/login_routes'))
router.use('/orders', require('./components/orders/orders_routes'))
router.use('/product', require('./components/product/product_routes'))

router.get('/', function(req, res){
    res.render('default/index')
})

router.get('/about', function(req, res){
    res.render('default/about')
})

//define all routes here.

module.exports = router