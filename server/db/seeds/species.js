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
      fave_food: 'avocado',
      description: 'A beautiful fluttery fairy',
      image: '/Images/Buttermon.gif',
    },
    {
      id: 2,
      name: 'Nomu-Nomu',
      hp_max: 100,
      hunger_max: 100,
      fave_food: 'apple',
      description: 'A fiery mischevious imp',
      image: '/Images/Nomunomu.gif',
    },
    {
      id: 3,
      name: 'Gonomgonom',
      hp_max: 100,
      hunger_max: 100,
      fave_food: 'Bacon',
      description: 'A grumpy firey winged ogre',
      image: '/Images/Flamemon.gif',
    },
    {
      id: 4,
      name: 'Geranadon',
      hp_max: 100,
      hunger_max: 100,
      fave_food: 'The blood of my enemies(DragonFruit)',
      description: 'Hungers For battle, to taste the bloody of his enemies!!',
      image: '/Images/Geranadon.gif',
    },
    {
      id: 5,
      name: 'Lanisaur',
      hp_max: 100,
      hunger_max: 100,
      fave_food: 'Wasabi peas Baby(Wine)',
      description: 'If you aint Wasabing you aint living',
      image: '/Images/lani.gif',
    },
    {
      id: 6,
      name: 'Tommasaur',
      hp_max: 100,
      hunger_max: 100,
      fave_food: 'Steak',
      description: 'Eager to learn',
      image: '/Images/creature.gif',
    },
    {
      id: 7,
      name: 'BenHsaurus',
      hp_max: 100,
      hunger_max: 100,
      fave_food: 'Pizza',
      description: 'MamaMia Pizza chef ready to serve',
      image: '/Images/benHsaurus.gif'
    },
    {
      id: 8,
      name: 'ArrrMon',
      hp_max: 100,
      hunger_max: 100,
      fave_food: 'Whiskey',
      description: 'A sea pirate Looking for the king',
      image: '/Images/priatemon.gif',
    },
    {
      id: 9,
      name: 'Keanrex',
      hp_max: 100,
      hunger_max: 100,
      fave_food: 'Jerky',
      description: 'Wants to become the priate king, but realises he is a dinosaur',
      image: '/Images/perepecmon.gif',
    },
  ])
}
