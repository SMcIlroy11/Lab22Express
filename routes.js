var express=require('express');
var router= express.Router();
var deathCab=require('./data.js');


router.get('/lyrics', function (req, res){
res.json(deathCab[Math.floor(Math.random()* deathCab.length)]);

});

module.exports = router;
