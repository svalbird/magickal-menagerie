/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('pets', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('auth0_id')
    table.integer('species_id')
    table.integer('xp_current')
    table.integer('hp_current')
    table.integer('hunger_current')
    table.integer('level')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('pets')
}
