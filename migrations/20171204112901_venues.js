exports.up = function(knex, Promise) {
  return Promise.all ([ knex.schema.createTable('venues',function (table){
      table.increments('id')
      table.varchar('name')
      table.varchar('city')
      table.varchar('state')
      table.integer('zipcode')
      table.varchar('address')
      table.varchar('phone')
      table.varchar('regular')
      table.varchar('happy')
      table.varchar('picture')
      table.string('website')
      table.integer('rating')
    })
])
}

exports.down = function(knex, Promise) {
  return Promise.all ([
   knex.schema.dropTable('venues')
  ])
}
