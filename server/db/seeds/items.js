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
      name: 'Beer',
      type: 'food',
      description: 'A nice cold brew.',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/Beer.png',
      hunger_fill: 40,
    },
    {
      id: 2,
      name: 'Bottle Cap',
      type: 'misc',
      description:
        'A rusty old bottle cap. It looks like the label has been scratched off.',
      image: '/Images/bottlecap.jpg',
      hunger_fill: 5,
    },
    {
      id: 3,
      name: 'Beach Ball',
      type: 'toy',
      description:
        'A colorful and floaty beach ball, perfect for a day in the sun.',
      image: '/Images/beachBalljpg.jpg',
      hunger_fill: 12,
    },
    {
      id: 4,
      name: 'Sausage',
      type: 'Food',
      description:
        'Sausage what more do i need to say',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/sausages.png',
      hunger_fill: 5,
    },
    {
      id: 5,
      name: 'wine',
      type: 'food',
      description:
        'A green yummy wasibi pea like wine.',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/Wine.png',
      hunger_fill: 15,
    },
    {
      id: 6,
      name: 'steak',
      type: 'food',
      description:
        'A yummy piece of cow.',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/steak.png',
      hunger_fill: 25,
    },
    {
      id: 7,
      name: 'pizza',
      type: 'food',
      description:
        'A yummy slice of heaven.',
      image:
        '/Images/pizza.png',
      hunger_fill: 15,
    },
    {
      id: 8,
      name: 'whiskey',
      type: 'medicine',
      description:
        'A concoction that makes creature feel good.',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/Avocado.png',
      hunger_fill: 25,
    },
    {
      id: 9,
      name: 'jerky',
      type: 'food',
      description:
        'A dried up piece of meat.',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/Jerky.png',
      hunger_fill: 25,
    },
    {
      id: 10,
      name: 'avocado',
      type: 'food',
      description:
        'A green yummy thing used by many.',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/Avocado.png',
      hunger_fill: 25,
    },
    {
      id: 11,
      name: 'Wormed Apple',
      type: 'poison',
      description:
        'Looks like a normal apple but little do you know it has the wormMon which is not good for ones health',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/AppleWorm.png',
      hunger_fill: -10,
    },
    {
      id: 12,
      name: 'Apple',
      type: 'food',
      description:
        'Now this is a Apple which will conter that of the Wormed Apple',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/Apple.png',
      hunger_fill: 10,
    },
    {
      id: 13,
      name: 'Bacon',
      type: 'food',
      description:
        'Nice crispy Bacon ready to please!.',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/Bacon.png',
      hunger_fill: 25,
    },
    {
      id: 14,
      name: 'Pig Head with Wormed Apple ',
      type: 'Poisoned food',
      description:
        'Looks Good to eat but has been Poisoned by the Nasty witch of the south',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/Boar.png',
      hunger_fill: -30,
    },
    {
      id: 15,
      name: 'Cookie',
      type: 'food',
      description:
        'The best in the east look no futher its cookie time!.',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/Cookie.png',
      hunger_fill: 25,
    },
    {
      id: 16,
      name: 'MelonWater',
      type: 'drink',
      description:
        'A freshing drink that tastes like watermelon',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/MelonWater.png',
      hunger_fill: 20,
    },
    {
      id: 17,
      name: 'sardines',
      type: 'food',
      description:
        'Stink smelly little fish',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/Sardines.png',
      hunger_fill: -25,
    },
    {
      id: 18,
      name: 'bug',
      type: 'misc',
      description:
        'Dont eat me I am gross',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/Bug.png',
      hunger_fill: -25,
    },
    {
      id: 19,
      name: 'dragonfruit',
      type: 'food',
      description:
        'The blood of my enemies',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/DragonFruit.png',
      hunger_fill: 80,
    },
    {
      id: 20,
      name: 'cherry',
      type: 'food',
      description:
        'A delicious piece of fruit',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/Cherry.png',
      hunger_fill: 10,
    },
    {
      id: 21,
      name: 'Temple Fruit',
      type: 'food',
      description:
        'A delicious a mysterious fruit you found in some ruins on Sandy Cove.',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/Cherry.png',
      hunger_fill: 69,
    },
    {
      id: 22,
      name: 'Honey Bun',
      type: 'food',
      description:
        'A warm and sweet-smelling bun, freshly baked from Honeybun Bakery in Bellston',
      image:
        '/Images/FreePixelFood/Assets/FreePixelFood/Sprite/Food/Cherry.png',
      hunger_fill: 40,
    },
  ])
}
