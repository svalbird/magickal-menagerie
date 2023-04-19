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
        p={4}
        backgroundImage="url(/Images/login-page.jpg)"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      >
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {petInteractions.data && (
            <Stack
              w="100%"
              h="100%"
              bg="white"
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
                  <Box>
                    <Text fontWeight={600} fontSize="l">
                      Level: {petInteractions.data[0].level}
                    </Text>
                    <Progress
                      value={petInteractions.data[0].level}
                      size="xs"
                      colorScheme="green"
                    />
                  </Box>
                  <Box>
                    <Text color={'gray.600'} fontSize="l">
                      Exp: {`${petInteractions.data[0].xpCurrent} / 100`}
                    </Text>
                    <Progress
                      value={petInteractions.data[0].xpCurrent}
                      size="xs"
                    />
                  </Box>
                  <Box>
                    <Text fontWeight={600} fontSize="l">
                      Health:
                      {`${petInteractions.data[0].hpCurrent} / ${petInteractions.data[0].hpMax}`}
                    </Text>
                    <Progress
                      value={petInteractions.data[0].hpCurrent}
                      size="xs"
                      colorScheme="red"
                    />
                  </Box>
                  <Box>
                    <Text color={'gray.600'} fontSize="l">
                      Hunger:
                      {`${petInteractions.data[0].hungerCurrent} / ${petInteractions.data[0].hungerMax}`}
                    </Text>
                    <Progress
                      value={petInteractions.data[0].hungerCurrent}
                      size="xs"
                      colorScheme="orange"
                    />
                  </Box>
                  <Button
                    colorScheme="blue"
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

          <Stack w="100%" h="100%" bg="white" borderRadius="md" maxW="750px">
            <NewsWidget />
            <Stack
              w="100%"
              h="100%"
              bg="white"
              boxShadow="lg"
              borderRadius="md"
              p={4}
              spacing={4}
              maxW="750px"
              align="center"
            >
              <Text fontWeight={600}>{`Latest Activity`}</Text>
              <Text color={'gray.600'}>Billy joined Magick Menagerie!</Text>
              <Text
                color={'gray.600'}
              >{`Tom's Pet, Carrie, died tragically.`}</Text>
            </Stack>
          </Stack>
          <Stack
            w="100%"
            h="100%"
            bg="white"
            boxShadow="lg"
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
