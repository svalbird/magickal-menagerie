/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('inventory').del()
  await knex('inventory').insert([
    { id: 1, user_id: 1, item_id: 1 },
    { id: 2, user_id: 1, item_id: 2 },
    { id: 3, user_id: 1, item_id: 3 },
    { id: 4, user_id: 1, item_id: 4 },
    { id: 5, user_id: 2, item_id: 1 },
    { id: 6, user_id: 3, item_id: 1 },
  ])
}
