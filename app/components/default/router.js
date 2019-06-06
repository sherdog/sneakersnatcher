
var express = require('express')
var join = require('path').join


var router = new express.Router();

function home(req, res) {
    res.render('default/index')
}

function about(req, res) {
    res.render('default/about')
}

router.use(express.static(join(__dirname, '../../pubic')))
router.get('/', home)
router.get('/about', about)

module.exports = router