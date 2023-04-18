/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('pets').del()
  await knex('pets').insert([
    {
      id: 1,
      auth0_id: '123|a',
      species_id: 1,
      name: 'Flit',
      xp_current: 0,
      hp_current: 100,
      hunger_current: 80,
      level: 1,
    },
    {
      id: 2,
      auth0_id: '234|b',
      species_id: 2,
      name: 'Grump',
      xp_current: 0,
      hp_current: 100,
      hunger_current: 80,
      level: 1,
    },
    {
      id: 3,
      auth0_id: '345|c',
      species_id: 3,
      name: 'Rollo',
      xp_current: 0,
      hp_current: 100,
      hunger_current: 100,
      level: 1,
    },
  ])
}
