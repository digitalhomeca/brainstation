
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('songs', function (table) {
      table.increments('id').primary();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('modified_at').notNullable().defaultTo(knex.fn.now());
      table.string('title').notNullable();
      table.integer('artist_id');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('songs');
  
};
