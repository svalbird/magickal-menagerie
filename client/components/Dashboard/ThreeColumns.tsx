import { useEffect } from 'react'
import {
  Box,
  SimpleGrid,
  Text,
  Stack,
  Flex,
  Image,
  Progress,
  Button,
  Center,
} from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchPetData } from '../../actions/petInteractions'
import { useNavigate } from 'react-router-dom'
import Playground from '../Playground'
import NewsWidget from './NewsWidget'

export default function SimpleThreeColumns() {
  const petInteractions = useAppSelector((state) => state.petInteractions)
  const dispatch = useAppDispatch()
  const { accessToken } = useAppSelector((state) => state.token)
  const navigate = useNavigate()
  useEffect(() => {
    if (accessToken) {
      dispatch(fetchPetData(accessToken))
    }
  }, [dispatch, accessToken])

  if (petInteractions.loading) {
    return <></>
  }
  if (petInteractions.error) {
    return <></>
  }
  if (petInteractions.data)
    return (
      <Box
        style={{
          minHeight: '83vh',
          backgroundImage: 'url(/Images/login-page.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          color: 'whitesmoke',
        }}
        p={4}
      >
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {petInteractions.data && (
            <Stack
              w="100%"
              h="100%"
              bg="#547FDE"
              boxShadow="lg"
              borderRadius="md"
              p={4}
              maxW="750px"
              justify="center"
              minH="500px"
            >
              <Box>
                <Text align={'center'} fontWeight={600} fontSize="2xl">
                  {petInteractions.data[0].petName}
                </Text>
                <Center>
                  <Image
                    width="30%"
                    src={petInteractions.data[0].image}
                    alt="gif"
                    p={4}
                    objectFit="contain"
                    borderRadius="md"
                    boxShadow="md"
                    borderWidth="2px"
                    borderColor="black"
                    borderStyle="solid"
                  />
                </Center>
              </Box>
              <Box h="50%" mb={4}>
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="space-around"
                  h="100%"
                >
                  <Box minWidth="40%">
                    <Text fontWeight={600} fontSize="2xl" mb="2">
                      Level: {petInteractions.data[0].level}
                    </Text>
                    <Progress
                      value={petInteractions.data[0].level}
                      size="xs"
                      colorScheme="green"
                      mb="2"
                    />
                    <Text color={'gray.600'} fontSize="2xl">
                      Exp: {`${petInteractions.data[0].xpCurrent} / 100`}
                    </Text>
                    <Progress
                      value={petInteractions.data[0].xpCurrent}
                      size="xs"
                      mb="2"
                    />
                    <Text fontWeight={600} fontSize="2xl">
                      Health:
                      {`${petInteractions.data[0].hpCurrent} / ${petInteractions.data[0].hpMax}`}
                    </Text>
                    <Progress
                      value={petInteractions.data[0].hpCurrent}
                      size="xs"
                      colorScheme="red"
                      mb="2"
                    />
                    <Text color={'gray.600'} fontSize="2xl">
                      Hunger:
                      {`${petInteractions.data[0].hungerCurrent} / ${petInteractions.data[0].hungerMax}`}
                    </Text>
                    <Progress
                      value={petInteractions.data[0].hungerCurrent}
                      size="xs"
                      colorScheme="orange"
                      mb="2"
                    />
                  </Box>
                  <Button
                    bg="orange"
                    colorScheme="orange"
                    mr={3}
                    fontSize="l"
                    onClick={() => {
                      if (petInteractions.data) {
                        navigate(
                          `/petinteraction/${petInteractions.data[0].id}`
                        )
                      }
                    }}
                  >
                    {`Play with ${petInteractions.data[0].petName}`}
                  </Button>
                </Flex>
              </Box>
            </Stack>
          )}

          <Stack
            w="100%"
            h="100%"
            bg="transparent"
            borderRadius="md"
            p={4}
            spacing={4}
            maxW="750px"
            fontFamily="Macondo"
            fontSize="2xl"
          >
            <NewsWidget />
            <Stack
              w="100%"
              h="100%"
              bg="#F7A380"
              boxShadow="lg"
              borderRadius="md"
              p={4}
              spacing={4}
              maxW="750px"
              align="center"
              fontFamily="Macondo"
              fontSize="2xl"
            >
              <Text fontWeight={600}>{`Latest Activity`}</Text>
              <Text fontWeight={450}>Gerard joined Magick Menagerie!</Text>
              <Text fontWeight={450}>Lani joined Magick Menagerie!</Text>
              <Text fontWeight={450}>Rohan joined Magick Menagerie!</Text>
              <Text fontWeight={450}>Tom joined Magick Menagerie!</Text>
            </Stack>
          </Stack>
          <Stack
            w="100%"
            h="100%"
            bg="transparent"
            borderRadius="md"
            spacing={4}
            maxW="750px"
          >
            <Playground />
          </Stack>
        </SimpleGrid>
      </Box>
    )
  return null
}
