import Location from './Location'

function BorealPeaks() {
  const info = {
    bgImage: 'borealpeaks.png',
    locationName: 'Boreal Peaks',
    locationText: `The cold, endless quiet of the Boreal Peaks is deafening. The hikes around here are gorgeous, and there's a local inn that you can visit for fine beer. But there's exploring to do in this untamed widerness, too.`,
    events: [
      {
        choiceText: `Buy some beer (-$80)`,
        chance: 100,
        outcomes: [
          {
            outcomeText: `In the Frostflicker Inn, there aren't many patrons. The fire is fading in its hearth, and you decide to warm you and you pet up with some delicious beer. The barkeeper looks up, and with a gruff tone, says bluntly "Out of beer, I'm afraid." He slams a bottle onto the table. "Hope this will suffice." You hand over the money and rest awhile in the cold, lonely inn. You gain Whiskey!`,
            changeMoney: -80,
            addItem: 8,
          },
        ],
      },
      {
        choiceText: `Take a hike along the peaks`,
        chance: 10,
        isHungerCheck: true,
        outcomes: [
          {
            outcomeText: `You wander along the peaks with your pet. The snow seems to get deeper and deeper, until... you're stuck. Your pet tugs and tugs at you, and with one final pull, it sets you free - along with... an avocado? You gain an avocado!`,
            addItem: 10,
            changeHunger: -20,
          },
          {
            outcomeText: `You wander along the peaks with your pet. The cold gray hike seems endless... until it isn't, and you and your pet are at the summit, and it looks as though the world has opened up before you. You can see from the peaks to the desert in the far south, and the red island in the west. This was absolutely worth it, exhausting though it was.`,
            changeHunger: -20,
          },
        ],
      },
      {
        choiceText: `Make a snow angel with your pet`,
        chance: 5,
        isHungerCheck: true,
        outcomes: [
          {
            outcomeText: `You and your pet flop down into the snow, and - ow! - there's something very spiky sticking into your back! You look down, and embedded in the oddly red ice below you is a rare dragonfruit! Yum! You gain a dragonfruit!`,
            addItem: 19,
            changeHunger: -10,
          },
          {
            outcomeText: `You and your pet flop down into the snow, and you start sweeping your arms and legs back and forth. Your pet seems confused at first, but then starts mimicking your movements - pehaps with a bit too much enthusiasm. It starts flinging snow everywhere! You laugh and follow suit, and while the snow angels look terrible, you both had a great time!`,
            changeHunger: -10,
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

export default BorealPeaks
