exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', table => {
  	table.increments('id').primary();
  	table.string('make');
  	table.string('model');
  	table.string('year');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cars');
};