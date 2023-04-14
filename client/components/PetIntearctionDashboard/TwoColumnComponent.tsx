import { Box, SimpleGrid, Stack, Text, Image, Flex, Progress, Button } from '@chakra-ui/react';
import { fetchPetInteraction } from '../../actions/petInteractions';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useEffect } from "react";

function TwoColumnComponent() {
  const { loading, error, data } = useAppSelector((state) => state.petInteractions)
  const dispatch = useAppDispatch()
  console.log(data)
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
              src={data?.pets[1].image}
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
                <Text fontWeight={600}>Level: {data?.pets[1].level}</Text>
                <Progress value={data?.pets[1].level} size="xs" colorScheme="green" />
              </Box>
              <Box>
                <Text color={'gray.600'}>Exp: {`${data?.pets[1].xpCurrent} / 100`}</Text>
                <Progress value={data?.pets[1].xpCurrent} size="xs" />
              </Box>
              <Box>
                <Text fontWeight={600}>Health: {`${data?.pets[1].hpCurrent} / ${data?.pets[1].hpMax}`}</Text>
                <Progress value={data?.pets[1].hpCurrent} size="xs" colorScheme="red" />
              </Box>
              <Box>
                <Text color={'gray.600'}>Hunger: {`${data?.pets[1].hungerCurrent} / ${data?.pets[1].hungerMax}`}</Text>
                <Progress value={data?.pets[1].hungerCurrent} size="xs" colorScheme="orange" />
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
            {data?.inventory.map((elem) => (
              <Box key={elem.id} w="125px" h="125px">
                <Image
                  src={elem.image}
                  alt="image"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  borderRadius="md"
                />
              </Box>
            ))}
          </SimpleGrid>
          <Box textAlign="center" mt={4}>
            <Button colorScheme="green">Feed your pet</Button>
          </Box>
        </Stack>
      </SimpleGrid>
      <Box w="50%" mx="auto" my={4} h="4px" bg="gray.300" borderRadius="full" />
    </Box>
  )
}

export default TwoColumnComponent;