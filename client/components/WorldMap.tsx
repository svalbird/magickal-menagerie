import { useState } from 'react'
import WorldMapper from './Explore/WorldMapper'
import { CustomArea } from 'react-img-mapper/dist/types'
import { useNavigate } from 'react-router-dom'

type LocationKey = {
  [key: string]: string
}

const locationKey: LocationKey = {
  'Sandy Cove': 'sandy-cove',
  'Everdew Woods': 'everdew-forest',
  'Umbral Marshes': 'umbral-marshes',
  Bellston: 'bellston',
  'Echoing Caves': 'echoing-caves',
  'Port Wunder': 'port-wunder',
  'The Fair Mistral': 'the-fair-mistral',
  'Freefolk Foothills': 'freefolk-foothills',
  'Lavender Oasis': 'lavender-oasis',
  'Isle of Crimson': 'isle-of-crimson',
  'Boreal Peaks': 'boreal-peaks',
}

const locationDesc: LocationKey = {
  'Sandy Cove':
    'On the eastern shores of Magickland lies this beautiful, sunny beach. Enjoy a fun day in the sun with your pet, and perhaps investigate the ancient ruins that are scattered along the shore...',
  'Everdew Woods':
    'An ancient forest lies here, with denizens strange and charming. A beautiful place to explore, but beware, for looks can be deceiving, and there are certainly those who would trick you lurking here...',
  'Umbral Marshes':
    'This dark, desolate swamp was once the heart of a powerful empire. Now it stands decaying and derelict, and its denizens are never too happy to see visitors.',
  Bellston:
    'A large trading village, Bellston is the hub of north-eastern Magickland. Here is a great place to shop, mingle, and enjoy the hustle-and-bustle of town life.',
  'Echoing Caves':
    'These caves are named for the sonorous echoes that can be heard from them late at night. Some people say they are cries of lost pets calling for their owners. Perhaps you can help them?',
  'Port Wunder':
    'This island city is the key port of Magickland - but underneath lurks a sinister criminal underworld. Enjoy the shops and sights, but keep a firm hand on your coinpurse',
  'The Fair Mistral': `Captain Rynn's famous explorer ship has returned after his ten-year journey, and he's hosting a perpertual party for all! Enjoy food, wine and dancing, and perhaps the secretive captain will spill secrets about lands far away...`,
  'Freefolk Foothills': `The freefolk pets live here, ownerless and happy. They love to play games and pamper other pets, but their mischief certainly can go too far if you're aren't careful!`,
  'Lavender Oasis':
    'Deep in the Southern Sands lies a gorgeous oasis. This is a perfect place to set off on an exciting desert expedition or enjoy a delicious delicacy.',
  'Isle of Crimson':
    'While eastern Magickland is now at peace with the Crimlings, they are still getting used to tourists and explorers in their lands. Getting to know the locals seems like a good idea, here.',
  'Boreal Peaks':
    'In the north of eastern Magickland, the frozen Boreal Peaks loom. The people here are hardy and the weather is cold. There are some beautiful views - if you can stand the cold.',
}

function WorldMap() {
  const [hoveredLocation, setHoveredLocation] = useState('Select an area!')

  function onLocationHover(area: CustomArea) {
    if (area.id) {
      setHoveredLocation(area.id)
    }
  }

  function onLocationStopHover() {
    setHoveredLocation('Select an area!')
  }

  const navigate = useNavigate()
  const routeChange = (area: CustomArea) => {
    if (area.id) {
      const path = locationKey[area.id]
      navigate(`/${path}`)
    }
  }

  return (
    <div
      className="world-display"
      style={{
        minHeight: '83vh',
        backgroundImage: 'url(/Images/login-page.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: 'whitesmoke',
      }}
    >
      <div
        className="location-desc"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          textAlign: 'center',
          marginTop: '40px',
        }}
      >
        <div style={{ fontSize: '3em' }}>
          <strong>{hoveredLocation}</strong>
        </div>

        <div style={{ marginTop: `10px`, fontSize: '1em' }}>
          <p>
            {locationDesc[hoveredLocation] ? locationDesc[hoveredLocation] : ``}
          </p>
        </div>
      </div>
      <div className="world-map">
        <WorldMapper
          onLocHover={onLocationHover}
          onLocLeave={onLocationStopHover}
          onLocClick={routeChange}
        />
      </div>
    </div>
  )
}

export default WorldMap

/* <!-- Image Map Generated by http://www.image-map.net/ -->
<img src="map.jpg" usemap="#image-map">

<map name="image-map">
    <area target="" alt="Sandy Cove" title="Sandy Cove" href="/sandy-cove" coords="752,619,94" shape="circle">
    <area target="" alt="Everdew Woods" title="Everdew Woods" href="/everdew-woods" coords="711,880,461,1036" shape="rect">
    <area target="" alt="Umbral Marshes" title="Umbral Marshes" href="/umbral-marshes" coords="907,915,120" shape="circle">
    <area target="" alt="Bellston" title="Bellston" href="/bellston" coords="441,652,83" shape="circle">
    <area target="" alt="Echoing Caves" title="Echoing Caves" href="/echoing-caves" coords="498,783,48" shape="circle">
    <area target="" alt="Port Wunder" title="Port Wunder" href="/port-wunder" coords="929,716,69" shape="circle">
    <area target="" alt="The Fair Mistral" title="The Fair Mistral" href="/the-fair-mistral" coords="971,563,75" shape="circle">
    <area target="" alt="Freefolk Foothills" title="Freefolk Foothills" href="/freefolk-foothills" coords="688,1178,119" shape="circle">
    <area target="" alt="Lavender Oasis" title="Lavender Oasis" href="/lavender-oasis" coords="1153,1190,87" shape="circle">
    <area target="" alt="Isle of Crimson" title="Isle of Crimson" href="/isle-of-crimson" coords="1405,584,194" shape="circle">
    <area target="" alt="Boreal Peaks" title="Boreal Peaks" href="/boreal-peaks" coords="484,306,893,461" shape="rect">
</map> */
