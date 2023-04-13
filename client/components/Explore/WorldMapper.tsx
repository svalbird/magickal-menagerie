import ImageMapper from 'react-img-mapper'
import mapData from '../../../server/db/json/map.json'
import { useEffect, useState } from 'react'

const WorldMapper = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const URL = '/Images/map.jpg'

  const MAP = {
    name: 'world-map',
    areas: mapData,
  }

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  return (
    <div>
      <ImageMapper
        src={URL}
        map={MAP}
        parentWidth={windowWidth}
        responsive={true}
      />
    </div>
  )
}

export default WorldMapper
