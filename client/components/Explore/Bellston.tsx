import Location from './Location'

function Bellston() {
  const info = {
    bgImage: 'bellston.jpg',
    locationName: 'Bellston',
    locationText: `The busy village of Bellston is bustling with activity. The famous bells ring as shop doors open and close, villagers carrying food and other items between them. This is the urban center of northern Magickland.`,
    events: [
      {
        choiceText: `Buy some delicious bread (-$50)`,
        chance: 100,
        outcomes: [
          {
            outcomeText: `You wander into Honeybun Bakery, and the waft of fresh bread is overwhelming and delicious. There's quite a queue to the register, but despite the number of customers, the baker takes your order earnestly, and hands you a still-warm honey bun. You gain a honeybun!`,
            changeMoney: -50,
          },
        ],
      },
      {
        choiceText: `Feed the local birds`,
        chance: 90,
        outcomes: [
          {
            outcomeText: `You tear up some food into bits, and sitting at a park bench, you feed the local birds. One lands on PETNAME, and your pet is delighted! What a wonderful experience!`,
          },
          {
            outcomeText: `You tear up some food into bits, and suddenly, a large hawk swoops down, eating all the food! PETNAME fights it off, but it's hurt in the process. Ow!`,
          },
        ],
      },
      {
        choiceText: `Busk with PETNAME`,
        chance: 20,
        outcomes: [
          {
            outcomeText: `You and PETNAME decide that now is a great time to earn a bit of money. You put a cup down in front of you, and start dancing with your pet. Your moves are inspired, and you're totally in sync - amazing! Onlookers clap to the beat as you spin and jig with PETNAME, and after a while, you have a healthy amount of money in the cup.`,
            changeMoney: 60,
          },
          {
            outcomeText: `You and PETNAME decide that now is a great time to earn a bit of money. You put a cup down in front of you, and start dancing with your pet. Your moves leave a lot to be desired, and the passerbys give naught more than odd looks.`,
          },
        ],
      },
    ],
  }

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

export default Bellston
