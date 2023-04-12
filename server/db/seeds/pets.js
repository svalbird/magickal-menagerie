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
      user_id: 1,
      species_id: 1,
      name: 'Flit',
      xp_current: 0,
      hp_current: 100,
      hunger_current: 100,
      level: 1,
    },
    {
      id: 2,
      user_id: 2,
      species_id: 2,
      name: 'Grump',
      xp_current: 0,
      hp_current: 100,
      hunger_current: 100,
      level: 1,
    },
    {
      id: 3,
      user_id: 3,
      species_id: 3,
      name: 'Rollo',
      xp_current: 0,
      hp_current: 100,
      hunger_current: 100,
      level: 1,
    },
  ])
}
