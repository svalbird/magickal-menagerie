import { Box, SimpleGrid, Stack, Text, Image, Flex, Progress, Button } from '@chakra-ui/react';
import { fetchPetInteraction } from '../../actions/petInteractions';
import { useAppDispatch } from '../../hooks/hooks';
import { useEffect } from "react";

function TwoColumnComponent() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchPetInteraction()).catch(console.error)
  }, [dispatch])
  return (
    <Box p={4} maxW="1200px" mx="auto">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 8 }} justifyContent="center">
        <Stack
          w="100%"
          h="100%"
          bg="white"
          boxShadow="lg"
          borderRadius="md"
          p={4}
          maxW="500px"
        >
          <Box w="100%" h="60%">
            <Image
              src="https://media.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif"
              alt="gif"
              w="100%"
              h="100%"
              objectFit="cover"
              borderRadius="md"
            />
          </Box>
          <Box h="40%" mb={4}>
            <Flex direction="column" alignItems="center" justifyContent="space-around" h="100%">
              <Box>
                <Text fontWeight={600}>Level: {`level`}</Text>
                <Progress value={50} size="xs" colorScheme="green" />
              </Box>
              <Box>
                <Text color={'gray.600'}>Exp: {`current/max`}</Text>
                <Progress value={70} size="xs" />
              </Box>
              <Box>
                <Text fontWeight={600}>Health: {`current/max`}</Text>
                <Progress value={80} size="xs" colorScheme="red" />
              </Box>
              <Box>
                <Text color={'gray.600'}>Hunger: {`current/max`}</Text>
                <Progress value={20} size="xs" colorScheme="orange" />
              </Box>
            </Flex>
          </Box>
        </Stack>
        <Stack
          w="100%"
          h="100%"
          bg="white"
          boxShadow="lg"
          borderRadius="md"
          p={4}
          maxW="500px"
        >
          <SimpleGrid columns={3} spacing={4} w="100%" h="100%">
            {[...Array(9)].map((_, index) => (
              <Box key={index} w="125px" h="125px">
                <Image
                  src="https://via.placeholder.com/125x125"
                  alt="image"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  borderRadius="md"
                />
              </Box>
            ))}
          </SimpleGrid>
          <Box align="center" mt={4}>
            <Button colorScheme="green">Feed your pet</Button>
          </Box>
        </Stack>
      </SimpleGrid>
      <Box w="50%" mx="auto" my={4} h="4px" bg="gray.300" borderRadius="full" />
    </Box>
  )
}

export default TwoColumnComponent;