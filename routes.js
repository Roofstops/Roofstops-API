var express = require('express');
var router = express.Router();
var queries = require('./queries')


router.get('/locations', function(req,res,next) {
  queries.getPlaces()
  .then((locationData) => {
    res.json(locationData)
  })
})


module.exports = router