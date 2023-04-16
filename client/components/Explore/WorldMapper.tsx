import ImageMapper from 'react-img-mapper'
import mapData from '../../../server/db/json/map.json'
import { useEffect, useState } from 'react'

interface Props {
  onLocHover: any
  onLocLeave: any
  onLocClick: any
}

const WorldMapper = (props: Props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const URL = '/Images/map.jpg'

  const MAP = {
    name: 'world-map',
    areas: mapData,
  }

  const ratio = 0.55

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
        parentWidth={windowWidth * ratio}
        responsive={true}
        onMouseEnter={props.onLocHover}
        onMouseLeave={props.onLocLeave}
        onClick={props.onLocClick}
      />
    </div>
  )
}

export default WorldMapper