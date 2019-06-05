var express = require('require')
var join = require('path').join

var router = new express.Router();

function home(req, res) {
    res.render('default/index')
}

router.use(express.static(join(__dirname, '../../pubic')))
router.get('/', home)

module.exports = router