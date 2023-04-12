/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    { id: 1, auth0_id: '123|a', display_name: 'Mandy', money: 0 },
    { id: 2, auth0_id: '234|b', display_name: 'Dustin', money: 0 },
    { id: 3, auth0_id: '345|c', display_name: 'Bill', money: 0 },
  ])
}
