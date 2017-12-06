const db = require('./connection')

function getPlaces() {
  return db('venues').select();
}

//add a review and get the review
function newReview(review) {
  return db('reviews').insert(review);
}


function getReview() {
  return db('reviews').select();
}









module.exports = {
  getPlaces,
  newReview,
  getReview
}
