/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {
      id: 1,
      name: 'Ice Cream',
      type: 'food',
      description: 'A swirl of vanilla soft-serve in a crunchy cone.',
      image: '',
      hunger_fill: 50,
    },
    {
      id: 2,
      name: 'Bottle Cap',
      type: 'misc',
      description:
        'A rusty old bottle cap. It looks like the label has been scratched off.',
      image: '',
    },
    {
      id: 3,
      name: 'Beach Ball',
      type: 'toy',
      description:
        'A colorful and floaty beach ball, perfect for a day in the sun.',
      image: '',
    },
    {
      id: 4,
      name: 'Rootwort Salve',
      type: 'medicine',
      description:
        'A foul-smelling gel fills this container. It help soothe cuts and burns.',
      image: '',
      hp_fill: 50,
    },
  ])
}
