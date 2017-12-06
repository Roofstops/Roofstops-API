
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {
          // id: ,
          review: "This place is great", venues_id:1},
        {
          // id: ,
          review: "We love the rooftop", venues_id:2}
      ]);
    });
};
