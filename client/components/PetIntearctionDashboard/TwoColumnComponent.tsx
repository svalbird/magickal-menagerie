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
  fetchPetData,
  updatePetInteraction,
} from '../../actions/petInteractions'
import {
  addNewItem,
  fetchInventory,
  spendInventoryItem,
} from '../../actions/inventory'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { useEffect, useState } from 'react'
import WaitIndicator from '../WaitIndicator'

function TwoColumnComponent() {
  const inventory = useAppSelector((state) => state.inventory)
  const petInteractions = useAppSelector((state) => state.petInteractions)
  const { accessToken } = useAppSelector((state) => state.token)
  const [selectItem, setSelectItem] = useState<number>(1)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (accessToken) {
      dispatch(fetchInventory(accessToken))
      dispatch(fetchPetData(accessToken))
    }
  }, [dispatch, accessToken])

  function handleSubmit() {
    const itemId = selectItem
    if (
      petInteractions.data &&
      inventory.data &&
      inventory.data.length > 0 &&
      accessToken
    ) {
      const item = inventory.data.find((item) => item.id === itemId)
      const hungerFill = item ? item.hungerFill : 0
      const updatedHunger =
        petInteractions.data[0].hungerCurrent + hungerFill > 100
          ? 100
          : petInteractions.data[0].hungerCurrent + hungerFill
      const updatedPet = {
        ...petInteractions.data[0],
        hungerCurrent: updatedHunger,
      }

      dispatch(updatePetInteraction(updatedPet, accessToken))
      dispatch(spendInventoryItem(itemId, accessToken))
    }
  }

  function handleSubmit2() {
    if (petInteractions.data && accessToken) {
      const newItem = {
        auth0Id: petInteractions.data[0].auth0Id,
        itemId: 1,
      }

      dispatch(addNewItem(newItem, accessToken))
    }
  }

  return (
    <div>
      {(petInteractions.loading || inventory.loading) && <WaitIndicator />}
      {petInteractions.error && <p>{petInteractions.error}</p>}
      {inventory.error && <p>{inventory.error}</p>}

      {petInteractions.data && inventory.data ? (
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
                  src={petInteractions.data[0].image}
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
                    <Text fontWeight={600}>
                      Level: {petInteractions.data[0].level}
                    </Text>
                    <Progress
                      value={petInteractions.data[0].level}
                      size="xs"
                      colorScheme="green"
                    />
                  </Box>
                  <Box>
                    <Text color={'gray.600'}>
                      Exp: {`${petInteractions.data[0].xpCurrent} / 100`}
                    </Text>
                    <Progress
                      value={petInteractions.data[0].xpCurrent}
                      size="xs"
                    />
                  </Box>
                  <Box>
                    <Text fontWeight={600}>
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
                    <Text color={'gray.600'}>
                      Hunger:
                      {`${petInteractions.data[0].hungerCurrent} / ${petInteractions.data[0].hungerMax}`}
                    </Text>
                    <Progress
                      value={petInteractions.data[0].hungerCurrent}
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
                {inventory.data.map((elem) => (
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
                <Button
                  colorScheme="blue"
                  type="submit"
                  onClick={handleSubmit2}
                >
                  Add inventory
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
