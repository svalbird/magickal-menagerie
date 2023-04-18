import { useState } from 'react'
import { Box, Center, Flex, Image, Button } from '@chakra-ui/react'
import { useAppSelector } from '../hooks/hooks'

function Playground() {
  const pet = useAppSelector((state) => state.petInteractions)
  const [animationState, setAnimationState] = useState({
    jumping: false,
    wobble: false,
    bounce: false,
    jumpShake: false,
  })

  function handleAnimationEnd() {
    setAnimationState({
      jumping: false,
      wobble: false,
      bounce: false,
      jumpShake: false,
    })
  }

  if (pet.loading) {
    return <></>
  }

  if (pet.error) {
    return <></>
  }

  if (pet.data)
    return (
      <>
        <Center>
          <Box
            border="1px solid #E2E8F0"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
            p="4"
            borderRadius="md"
            width="100%"
            backgroundImage="url(/Images/playground.jpg)"
            backgroundRepeat="no-repeat"
            backgroundPosition="bottom"
            height="80lvh"
          >
            <Center>
              <Image
                src={pet.data[0].image}
                alt={''}
                onAnimationEnd={handleAnimationEnd}
                style={{
                  position: 'absolute',
                  bottom: '250px',
                  width: '200px',
                  animation: animationState.jumping
                    ? 'jump-spin 1.2s ease'
                    : animationState.wobble
                    ? 'wobble 2s ease'
                    : animationState.bounce
                    ? 'bounce 2s ease'
                    : animationState.jumpShake
                    ? 'jump-shake 1.2s ease'
                    : '',
                  animationFillMode: 'forwards',
                  animationDirection: 'normal',
                  animationPlayState: 'running',
                }}
              />
            </Center>
            <Center>
              <Flex
                style={{
                  position: 'absolute',
                  bottom: '69px',
                }}
              >
                <Button
                  onClick={() =>
                    setAnimationState({ ...animationState, jumpShake: true })
                  }
                >
                  Jump
                </Button>
                <Button
                  onClick={() =>
                    setAnimationState({ ...animationState, bounce: true })
                  }
                >
                  Bounce
                </Button>
                <Button
                  onClick={() =>
                    setAnimationState({ ...animationState, jumping: true })
                  }
                >
                  BackFlip
                </Button>
                <Button
                  onClick={() =>
                    setAnimationState({ ...animationState, wobble: true })
                  }
                >
                  Wobble
                </Button>
              </Flex>
            </Center>
          </Box>
        </Center>
      </>
    )
}

export default Playground
