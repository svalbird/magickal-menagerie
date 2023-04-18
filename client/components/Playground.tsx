import { useState } from 'react'
import { Box, Center, Flex, Image, Button, Stack } from '@chakra-ui/react'
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
            height="75lvh"
            position="relative"
          >
            <Flex direction="column" align="center">
              <Image
                src={pet.data[0].image}
                alt={''}
                onAnimationEnd={handleAnimationEnd}
                style={{
                  position: 'absolute',
                  bottom: '40%',
                  width: '35%',
                  animation: animationState.jumping
                    ? 'jump-spin 1.2s ease'
                    : animationState.wobble
                    ? 'wobble 2s ease'
                    : animationState.bounce
                    ? 'bounce 2s ease'
                    : animationState.jumpShake
                    ? 'jump-shake 1.2s ease'
                    : '',
                }}
              />

              <Stack
                direction="row"
                spacing={4}
                mt={4}
                maxWidth="95%"
                position="absolute"
                bottom="10%"
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
                  Flip
                </Button>
                <Button
                  onClick={() =>
                    setAnimationState({ ...animationState, wobble: true })
                  }
                >
                  Wobble
                </Button>
              </Stack>
            </Flex>
          </Box>
        </Center>
      </>
    )
  return null
}

export default Playground
