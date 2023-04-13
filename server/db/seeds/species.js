/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('species').del()
  await knex('species').insert([
    {
      id: 1,
      name: 'Fluttery',
      hp_max: 100,
      hunger_max: 100,
      fave_food: 'Ice Cream',
      description: 'A beautiful fluttery fairy',
      image: '/Images/creature.gif',
    },
    {
      id: 2,
      name: 'Nomu-Nomu',
      hp_max: 100,
      hunger_max: 100,
      fave_food: 'Pizza',
      description: 'A fiery mischevious imp',
      image: '/Images/creature.gif',
    },
    {
      id: 3,
      name: 'Gonomgonom',
      hp_max: 100,
      hunger_max: 100,
      fave_food: 'Bread',
      description: 'A grumpy firey winged ogre',
      image: '/Images/creature.gif',
    },
  ])
}
