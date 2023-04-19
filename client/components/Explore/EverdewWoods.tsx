import Location from './Location'

const info = {
  bgImage: 'everdewwoods.jpg',
  locationName: 'Everdew Woods',
  locationText: `An ancient forest lies here, with denizens strange and charming. A beautiful place to explore, but beware, for looks can be deceiving, and there are certainly those who would trick you lurking here...`,
  events: [
    {
      choiceText: `Talk to the faeries`,
      chance: 15,
      outcomes: [
        {
          outcomeText: `You come across a group of faeries gathered around a small clearing. They seem to be in the middle of a heated argument, but stop as soon as they see you. "Oh, a human!" one of them exclaims. "Please, help us settle this disagreement!" They explain the issue to you, and with your insight, they reach a resolution. In gratitude, they offer you a gift. You gain a yummy apple!`,
          addItem: 12,
        },
        {
          outcomeText: `You hear soft whispers and laughter coming from behind the trees. Curiosity gets the best of you, and you follow the sound, only to find a group of faeries gathered around a small fire. They don't seem too pleased at your interruption, and one of them shoots a small burst of magic at you. You manage to dodge it, but decide to leave before things escalate any further.`,
        },
      ],
    },
    {
      choiceText: `Explore the woods`,
      chance: 40,
      isHungerCheck: true,
      outcomes: [
        {
          outcomeText: `You wander deep into the woods and come across a group of friendly forest creatures. They invite you and your pet to a feast and you gladly accept. The food is delicious and the company is pleasant. You gain a steak!`,
          addItem: 6,
          changeHunger: 20,
        },
        {
          outcomeText: `You wander deep into the woods and stumble upon a beautiful glade. The sun shines down and sparkles off the dew drops, making the whole area look like it's made of diamonds. You take a deep breath and feel rejuvenated.`,
        },
      ],
    },
    {
      choiceText: `Follow the mysterious voice you can hear...`,
      chance: 15,
      isHungerCheck: true,
      outcomes: [
        {
          outcomeText: `You follow the voice and end up in front of a large tree. A fairy emerges from behind the tree and offers to grant you a wish. You think hard and ask for riches a plenty. The fairy obliges and disappears, leaving the gold in your hand. You gain $500!`,
          changeMoney: 500,
          changeHunger: -20,
        },
        {
          outcomeText: `You follow the voice and end up in front of a large tree. A mischievous fairy emerges from behind the tree and tricks you into playing a game. After what feels like hours, you sneak away when the fairy isn't looking. Phew!`,
          changeHunger: -20,
        },
      ],
    },
  ],
}

function EverdewWoods() {
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

export default EverdewWoods
