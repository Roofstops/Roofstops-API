
exports.up = function(knex, Promise) {
  return Promise.all ([ knex.schema.createTable('reviews',function (table){
    table.increments('id')
    table.text('review')
    table.integer('venues_id')
})
])
}

exports.down = function(knex, Promise) {
  return Promise.all ([
   knex.schema.dropTable('reviews')
  ])
}
