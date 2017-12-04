const db = require('./connection')

function getPlaces() {
  return db('venues').select();
}

module.exports = {
  getPlaces
}
