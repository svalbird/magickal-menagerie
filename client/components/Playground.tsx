import { useEffect, useState } from 'react'

function Playground() {
  const [jumping, setJumping] = useState(false)
  const [wobble, setWobble] = useState(false)
  const [bounce, setBounce] = useState(false)
  const [jumpShake, setJumpShake] = useState(false)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === 'Space') {
        setJumping(true)
      }
      if (event.code === 'ArrowRight') {
        setWobble(true)
      }
      if (event.code === 'ArrowLeft') {
        setBounce(true)
      }
      if (event.code === 'ArrowUp') {
        setJumpShake(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  function handleAnimationEnd() {
    setJumping(false)
    setWobble(false)
    setBounce(false)
    setJumpShake(false)
  }

  return (
    <div style={{ position: 'relative' }}>
      <img
        src="/Images/1369.jpg"
        alt="Playground"
        style={{ position: 'absolute', width: 1000 }}
      />
      <img
        className="creature"
        src="/Images/creature.gif"
        alt="my-pet"
        onAnimationEnd={handleAnimationEnd}
        style={{
          zIndex: 1,
          width: '150px',
          position: 'relative',
          top: jumping || jumpShake ? '170px' : '220px',
          left: jumping || jumpShake ? '350px' : '300px',
          animation: jumping
            ? 'jump-spin 1.2s ease'
            : wobble
            ? 'wobble 2s ease'
            : bounce
            ? 'bounce 2s ease'
            : jumpShake
            ? 'jump-shake 1.2s ease'
            : '',
          animationFillMode: 'forwards',
          animationDirection: 'normal',
          animationPlayState: 'running',
        }}
      />
    </div>
  )
}

export default Playground
