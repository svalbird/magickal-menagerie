/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('species', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('hp_max')
    table.integer('hunger_max')
    table.string('description')
    table.string('fave_food')
    table.string('image')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('species')
}
