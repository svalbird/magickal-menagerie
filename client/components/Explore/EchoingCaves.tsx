import Location from './Location'

const info = {
  bgImage: 'echoingcaves.jpg',
  locationName: 'Echoing Caves',
  locationText: `The echoing caves are a maze of tunnels and caverns, filled with strange and wondrous creatures. Be careful where you step - you never know what might be lurking just around the corner...`,
  events: [
    {
      choiceText: `Follow the sound of the echoes`,
      chance: 50,
      isHungerCheck: true,
      outcomes: [
        {
          outcomeText: `As you wander through the caves, you hear a faint sound echoing through the tunnels. You follow the sound to a small cavern, where you find a lost pet, shivering and scared. You comfort the pet, and it rewards you with rare wine. You gain wine!`,
          addItem: 5,
          changeHunger: -10,
        },
        {
          outcomeText: `You follow the sound of the echoes for what seems like hours, but you never seem to get any closer. Eventually, you give up and head back to the surface, disappointed.`,
          changeHunger: -10,
        },
      ],
    },
    {
      choiceText: `Explore the tunnels`,
      chance: 80,
      outcomes: [
        {
          outcomeText: `As you explore the tunnels, you come across a small cache of supplies hidden away in a crevice in the wall. You take what you need, and leave the rest for any other travelers who might come through. You gain some jerky!`,
          addItem: 9,
          changeHunger: -10,
        },
        {
          outcomeText: `You wander through the tunnels, but you don't find anything of interest. Eventually, you make your way back to the surface.`,
          changeHunger: -10,
        },
      ],
    },
    {
      choiceText: `Fight a monster`,
      chance: 20,
      isHungerCheck: true,
      outcomes: [
        {
          outcomeText: `You come face-to-face with a fearsome monster, but you manage to defeat it with your trusty weapon. As a reward for your bravery, the monster drops a valuable treasure. You gain $100!`,
          changeMoney: 100,
          changeHunger: -20,
        },
        {
          outcomeText: `You come across a monster, but it's too strong for you to defeat. You make a hasty retreat, hoping to avoid any further confrontations.`,
          changeHunger: -20,
        },
      ],
    },
  ],
}

function EchoingCaves() {
  return (
    <div>
      <Location
        bgImage={info.bgImage}
        locationName={info.locationName}
        locationText={info.locationText}
        events={info.events}
      />
    </div>
  )
}

export default EchoingCaves
