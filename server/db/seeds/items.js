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
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/Strawberry.png',
      hunger_fill: 50,
    },
    {
      id: 2,
      name: 'Bottle Cap',
      type: 'misc',
      description:
        'A rusty old bottle cap. It looks like the label has been scratched off.',
      image: '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/Apple.png',
      hunger_fill: 10,
    },
    {
      id: 3,
      name: 'Beach Ball',
      type: 'toy',
      description:
        'A colorful and floaty beach ball, perfect for a day in the sun.',
      image: '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/Beer.png',
      hunger_fill: 12,
    },
    {
      id: 4,
      name: 'Rootwort Salve',
      type: 'medicine',
      description:
        'A foul-smelling gel fills this container. It help soothe cuts and burns.',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/Cherry.png',
      hunger_fill: 69,
    },
  ])
}
