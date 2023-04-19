/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('inventory').del()
  await knex('inventory').insert([
    { id: 1, auth0_id: '123|a', item_id: 1 },
    { id: 2, auth0_id: '123|a', item_id: 2 },
    { id: 3, auth0_id: '123|a', item_id: 3 },
    { id: 4, auth0_id: '123|a', item_id: 4 },
    { id: 5, auth0_id: '234|b', item_id: 1 },
    { id: 6, auth0_id: '345|c', item_id: 1 },
  ])
}
