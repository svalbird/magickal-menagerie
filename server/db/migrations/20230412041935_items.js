/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('items', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('type')
    table.integer('hp_fill')
    table.integer('hunger_fill')
    table.string('description')
    table.string('image')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('items')
}
