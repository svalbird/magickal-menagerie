import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Flex,
  Progress,
  Button,
} from '@chakra-ui/react'
import {
  fetchPetInteraction,
  updatePetInteractionAndDeleteInventoryItem,
} from '../../actions/petInteractions'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { useEffect, useState } from 'react'
import WaitIndicator from '../WaitIndicator'
import { PetIntData } from '../../../Model/petInt'

function TwoColumnComponent() {
  const { loading, error, data } = useAppSelector(
    (state) => state.petInteractions
  )
  const [selectItem, setSelectItem] = useState<number>(1)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchPetInteraction())
  }, [dispatch])

  function handleSubmit() {
    const itemId = selectItem
    console.log('item', itemId)
    if (data && data.inventory && data.inventory.length > 0) {
      const item = data.inventory.find((item) => item.id === itemId)
      const hungerFill = item ? item.hungerFill : 0
      const updatedHunger =
        data.pets[0].hungerCurrent + hungerFill > 100
          ? 100
          : data.pets[0].hungerCurrent + hungerFill
      const updatedPet = {
        ...data.pets[0],
        hungerCurrent: updatedHunger,
      }
      console.log(updatedPet)
      dispatch(updatePetInteractionAndDeleteInventoryItem(updatedPet, itemId))
    }
  }

  // I need to select an item, on pushing the button,
  //the hungerFill value should be added to the hungerCurrent
  //value on the PetIntData, then the item gets deleted and the
  //pet gets updated with the new hungerCurrent

  return (
    <div>
      {loading && <WaitIndicator />}
      {error && <p>{error}</p>}

      {data ? (
        <Box p={4} maxW="1200px" mx="auto">
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 4, md: 8 }}
            justifyContent="center"
          >
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
                  src={data?.pets[0].image}
                  alt="gif"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  borderRadius="md"
                />
              </Box>
              <Box h="40%" mb={4}>
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="space-around"
                  h="100%"
                >
                  <Box>
                    <Text fontWeight={600}>Level: {data?.pets[0].level}</Text>
                    <Progress
                      value={data?.pets[0].level}
                      size="xs"
                      colorScheme="green"
                    />
                  </Box>
                  <Box>
                    <Text color={'gray.600'}>
                      Exp: {`${data?.pets[0].xpCurrent} / 100`}
                    </Text>
                    <Progress value={data?.pets[0].xpCurrent} size="xs" />
                  </Box>
                  <Box>
                    <Text fontWeight={600}>
                      Health:
                      {`${data?.pets[0].hpCurrent} / ${data?.pets[0].hpMax}`}
                    </Text>
                    <Progress
                      value={data?.pets[0].hpCurrent}
                      size="xs"
                      colorScheme="red"
                    />
                  </Box>
                  <Box>
                    <Text color={'gray.600'}>
                      Hunger:
                      {`${data?.pets[0].hungerCurrent} / ${data?.pets[0].hungerMax}`}
                    </Text>
                    <Progress
                      value={data?.pets[0].hungerCurrent}
                      size="xs"
                      colorScheme="orange"
                    />
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
                  <Box
                    key={elem.id}
                    w="125px"
                    h="125px"
                    borderRadius="md"
                    onClick={() => setSelectItem(elem.id)}
                    borderWidth={selectItem === elem.id ? 2 : 0}
                    borderColor="blue.500"
                  >
                    <Image
                      src={elem.image}
                      alt="image"
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />
                  </Box>
                ))}
              </SimpleGrid>
              <Box textAlign="center" mt={4}>
                <Button colorScheme="blue" type="submit" onClick={handleSubmit}>
                  Feed your pet
                </Button>
              </Box>
            </Stack>
          </SimpleGrid>
          <Box
            w="50%"
            mx="auto"
            my={4}
            h="4px"
            bg="gray.300"
            borderRadius="full"
          />
        </Box>
      ) : (
        <div>
          <p>No data!</p>
        </div>
      )}
    </div>
  )
}

export default TwoColumnComponent
