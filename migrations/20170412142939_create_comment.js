exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', table => {
    table.increments()
    table.text("content")
    table.integer("post_id").index().references("id").inTable("post").onDelete("cascade").notNull()
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comment')
}