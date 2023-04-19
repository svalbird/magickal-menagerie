import { useAuth0 } from '@auth0/auth0-react'
import { Box, Center, Flex, Image, Button } from '@chakra-ui/react'

function Login() {
  const { loginWithRedirect } = useAuth0()

  function handleSignIn() {
    loginWithRedirect()
  }

  return (
    <>
      <Center>
        <Box
          width="100%"
          backgroundImage="url(/Images/login-page.jpg)"
          backgroundRepeat="no-repeat"
          backgroundPosition="bottom"
          backgroundSize="cover"
          height="100lvh"
        >
          <Center mt="10%" mb={16}>
            <Flex direction="column" align="center">
              <Image
                mr="5%"
                src={'Images/logo_final.png'}
                alt={''}
                style={{ width: '50%', animation: 'grow 3s ease' }}
              />
              <Flex direction="row" mt={100}>
                <Image
                  src={'Images/creature.gif'}
                  alt={''}
                  style={{
                    width: '100px',
                    animation: 'bounce2 2s ease infinite',
                  }}
                />
                <Image
                  src={'Images/benHsaurus.gif'}
                  alt={''}
                  style={{
                    width: '100px',
                    animation: 'bounce 2s ease infinite',
                  }}
                />
                <Image
                  src={'Images/Geranadon.gif'}
                  alt={''}
                  style={{
                    width: '100px',
                    animation: 'bounce2 2s ease infinite',
                  }}
                />
                <Image
                  src={'Images/lani.gif'}
                  alt={''}
                  style={{
                    width: '100px',
                    animation: 'bounce 2s ease infinite',
                  }}
                />
                <Image
                  src={'Images/perepecmon.gif'}
                  alt={''}
                  style={{
                    width: '100px',
                    animation: 'bounce2  2s ease infinite',
                  }}
                />
              </Flex>
              <Button
                mt={100}
                onClick={handleSignIn}
                bg="#6C2E01"
                color="white"
                _hover={{ bg: '#A44900' }}
                _active={{ bg: '#A44900' }}
                _focus={{ boxShadow: 'none' }}
                borderRadius="full"
                fontWeight="bold"
                px={10}
                py={6}
                fontSize="xl"
                letterSpacing="wide"
                textShadow="1px 1px #000"
                transition="background 0.3s ease-in-out"
              >
                Enter Magickland
              </Button>
            </Flex>
          </Center>
        </Box>
      </Center>
    </>
  )
}

export default Login
