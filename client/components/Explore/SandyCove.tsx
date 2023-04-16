import { Box, Center, Flex, Image } from '@chakra-ui/react'
import { useState } from 'react'


function SandyCove() {
  const [option, setOption] = useState(0)

  function rollChance(successChance: number) {
    if( (1 - Math.random()) * 100 > successChance) {
      return true
    }
    return false
  }

  function handleClick(dialogOption: number) {
    switch(dialogOption){
      case 0:
        setOption(0)
        break
      case 1:
        if(rollChance(40)) {
          setOption(1)
        } else {
          setOption(2)
        }
        break
      case 2:
        setOption(3)
        break
      case 3:
        if(rollChance(10)) {
          setOption(4)
        } else {
          setOption(5)
        }
        break
      default:
        setOption(0)
    }
  }

  if(option === 1) {
    return (<div
      style={{
        backgroundImage: 'url(/Images/sandycove.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        width: '100%',
        height: '80vh',
      }}
    >
      <Box
        border="1px solid #E2E8F0"
        boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
        p="4"
        borderRadius="md"
        width={200}
        style={{
          textAlign: 'center',
          fontSize: 'large',
          backgroundColor: 'rgba(255,255,255, 0.6)',
        }}
      >
        <strong>Sandy Cove</strong>
      </Box>
      <Center>
        <Flex direction="column" align="center">
          <Box
            border="1px solid #E2E8F0"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
            p="4"
            borderRadius="md"
            width={800}
            style={{
              textAlign: 'center',
              fontSize: 'medium',
              backgroundColor: 'rgba(255,255,255, 0.6)',
            }}
          >
            {`You search the sand for treasure when PETNAME spots something glinting in the sand! Gain 100 money!`}
          </Box>
          <Box
            border="1px solid #E2E8F0"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
            p="4"
            borderRadius="md"
            width={800}
            style={{
              textAlign: 'center',
              fontSize: 'medium',
              backgroundColor: 'rgba(255,255,255, 0.6)',
              marginTop: '10px',
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}
            onClick={() => handleClick(0)}
          >
            {`Back`}
          </Box>
        </Flex>
      </Center>

      <Image
        src={'Images/creature.gif'}
        alt={''}
        style={{ position: 'absolute', bottom: '  0', width: '200px' }}
      />
    </div>)
  }
  if(option === 2) {
    return(<div
      style={{
        backgroundImage: 'url(/Images/sandycove.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        width: '100%',
        height: '80vh',
      }}
    >
      <Box
        border="1px solid #E2E8F0"
        boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
        p="4"
        borderRadius="md"
        width={200}
        style={{
          textAlign: 'center',
          fontSize: 'large',
          backgroundColor: 'rgba(255,255,255, 0.6)',
        }}
      >
        <strong>Sandy Cove</strong>
      </Box>
      <Center>
        <Flex direction="column" align="center">
          <Box
            border="1px solid #E2E8F0"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
            p="4"
            borderRadius="md"
            width={800}
            style={{
              textAlign: 'center',
              fontSize: 'medium',
              backgroundColor: 'rgba(255,255,255, 0.6)',
            }}
          >
            {`You spend hours combing the sand, but end up with nothing to show for it but a nasty sunburn`}
          </Box>
          <Box
            border="1px solid #E2E8F0"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
            p="4"
            borderRadius="md"
            width={800}
            style={{
              textAlign: 'center',
              fontSize: 'medium',
              backgroundColor: 'rgba(255,255,255, 0.6)',
              marginTop: '10px',
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}
            onClick={() => handleClick(0)}
          >
            {`Back`}
          </Box>
        </Flex>
      </Center>

      <Image
        src={'Images/creature.gif'}
        alt={''}
        style={{ position: 'absolute', bottom: '  0', width: '200px' }}
      />
    </div>)
  }
  if(option === 3) {
    return(<div
      style={{
        backgroundImage: 'url(/Images/sandycove.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        width: '100%',
        height: '80vh',
      }}
    >
      <Box
        border="1px solid #E2E8F0"
        boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
        p="4"
        borderRadius="md"
        width={200}
        style={{
          textAlign: 'center',
          fontSize: 'large',
          backgroundColor: 'rgba(255,255,255, 0.6)',
        }}
      >
        <strong>Sandy Cove</strong>
      </Box>
      <Center>
        <Flex direction="column" align="center">
          <Box
            border="1px solid #E2E8F0"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
            p="4"
            borderRadius="md"
            width={800}
            style={{
              textAlign: 'center',
              fontSize: 'medium',
              backgroundColor: 'rgba(255,255,255, 0.6)',
            }}
          >
            {`You buy some fresh and delicious vanilla soft serve`}
          </Box>
          <Box
            border="1px solid #E2E8F0"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
            p="4"
            borderRadius="md"
            width={800}
            style={{
              textAlign: 'center',
              fontSize: 'medium',
              backgroundColor: 'rgba(255,255,255, 0.6)',
              marginTop: '10px',
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}
            onClick={() => handleClick(0)}
          >
            {`Back`}
          </Box>
        </Flex>
      </Center>

      <Image
        src={'Images/creature.gif'}
        alt={''}
        style={{ position: 'absolute', bottom: '  0', width: '200px' }}
      />
    </div>)
  }

  return (
    <div
      style={{
        backgroundImage: 'url(/Images/sandycove.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        width: '100%',
        height: '80vh',
      }}
    >
      <Box
        border="1px solid #E2E8F0"
        boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
        p="4"
        borderRadius="md"
        width={200}
        style={{
          textAlign: 'center',
          fontSize: 'large',
          backgroundColor: 'rgba(255,255,255, 0.6)',
        }}
      >
        <strong>Sandy Cove</strong>
      </Box>
      <Center>
        <Flex direction="column" align="center">
          <Box
            border="1px solid #E2E8F0"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
            p="4"
            borderRadius="md"
            width={800}
            style={{
              textAlign: 'center',
              fontSize: 'medium',
              backgroundColor: 'rgba(255,255,255, 0.6)',
            }}
          >
            {`As you arrive in Sandy Cove, you can smell the sea and feel the hot
            sun on your skin. You look down at PETNAME and they're playing in
            the sand. How cute!`}
          </Box>
          <Box
            border="1px solid #E2E8F0"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
            p="4"
            borderRadius="md"
            width={800}
            style={{
              textAlign: 'center',
              fontSize: 'medium',
              backgroundColor: 'rgba(255,255,255, 0.6)',
              marginTop: '10px',
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}
            onClick={() => handleClick(1)}
          >
            {`Search the sand for treasure`}
          </Box>
          <Box
            border="1px solid #E2E8F0"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
            p="4"
            borderRadius="md"
            width={800}
            style={{
              textAlign: 'center',
              fontSize: 'medium',
              backgroundColor: 'rgba(255,255,255, 0.6)',
              marginTop: '10px',
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}
          >
            {`Buy some ice-cream (-$10)`}
          </Box>
          <Box
            border="1px solid #E2E8F0"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
            p="4"
            borderRadius="md"
            width={800}
            style={{
              textAlign: 'center',
              fontSize: 'medium',
              backgroundColor: 'rgba(255,255,255, 0.6)',
              marginTop: '10px',
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}
          >
            {`Explore the strange ruins`}
          </Box>
        </Flex>
      </Center>

      <Image
        src={'Images/creature.gif'}
        alt={''}
        style={{ position: 'absolute', bottom: '  0', width: '200px' }}
      />
    </div>
  )
}

export default SandyCove
