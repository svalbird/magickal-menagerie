import { useParams } from 'react-router-dom'

import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  Progress,
  Button,
  Center,
} from '@chakra-ui/react'
import { fetchInventory, spendInventoryItem } from '../actions/inventory'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useEffect, useState } from 'react'
import WaitIndicator from './WaitIndicator'
import { fetchOtherPetData, updatePet } from '../actions/otherPetActions'

function OtherPetInteraction() {
  const inventory = useAppSelector((state) => state.inventory)
  const otherPet = useAppSelector((state) => state.otherPet)
  const { accessToken } = useAppSelector((state) => state.token)
  const [selectItem, setSelectItem] = useState<number>(1)
  const dispatch = useAppDispatch()

  const { petId } = useParams<{ petId: string }>()

  useEffect(() => {
    if (petId && accessToken) {
      dispatch(fetchOtherPetData(parseInt(petId)))
      dispatch(fetchInventory(accessToken))
    }
  }, [dispatch, petId, accessToken])

  function handleSubmit() {
    const itemId = selectItem
    if (
      otherPet.data &&
      inventory.data &&
      inventory.data.length > 0 &&
      accessToken
    ) {
      const item = inventory.data.find((item) => item.id === itemId)
      const hungerFill = item ? item.hungerFill : 0
      const updatedHunger =
        otherPet.data.hungerCurrent + hungerFill > 100
          ? 100
          : otherPet.data.hungerCurrent + hungerFill < 0
          ? 0
          : otherPet.data.hungerCurrent + hungerFill
      const updatedPet = {
        ...otherPet.data,
        hungerCurrent: updatedHunger,
      }

      dispatch(updatePet(updatedPet))
      dispatch(spendInventoryItem(itemId, accessToken))
    }
  }

  return (
    <div>
      {(otherPet.loading || inventory.loading) && <WaitIndicator />}
      {otherPet.error && <></>}
      {inventory.error && <></>}

      {otherPet.data && inventory.data ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80lvh',
            backgroundImage: 'url(/Images/login-page.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Box p={4} maxW="1200px" mx="auto" minHeight="50lvh" minWidth="50lvw">
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
                maxW="750px"
                justify="center"
                minH="650px"
              >
                <Box w="100%">
                  <Text align={'center'} fontWeight={600} fontSize="2xl">
                    {otherPet.data.petName}
                  </Text>
                  <Center>
                    <Image
                      p={4}
                      src={otherPet.data.image}
                      alt="gif"
                      w="30%"
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
                        Level: {otherPet.data.level}
                      </Text>
                      <Progress
                        value={otherPet.data.level}
                        size="xs"
                        colorScheme="green"
                      />
                    </Box>
                    <Box>
                      <Text color={'gray.600'} fontSize="l">
                        Exp: {`${otherPet.data.xpCurrent} / 100`}
                      </Text>
                      <Progress value={otherPet.data.xpCurrent} size="xs" />
                    </Box>
                    <Box>
                      <Text fontWeight={600} fontSize="l">
                        Health:
                        {`${otherPet.data.hpCurrent} / ${otherPet.data.hpMax}`}
                      </Text>
                      <Progress
                        value={otherPet.data.hpCurrent}
                        size="xs"
                        colorScheme="red"
                      />
                    </Box>
                    <Box>
                      <Text color={'gray.600'} fontSize="l">
                        Hunger:
                        {`${otherPet.data.hungerCurrent} / ${otherPet.data.hungerMax}`}
                      </Text>
                      <Progress
                        value={otherPet.data.hungerCurrent}
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
                maxW="750px"
              >
                <SimpleGrid columns={3} spacing={4} w="100%" h="100%">
                  {inventory.data.map((elem) => (
                    <Popover key={elem.id} placement="right">
                      <PopoverTrigger>
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
                      </PopoverTrigger>
                      <PopoverContent maxW="200px">
                        <PopoverHeader
                          fontWeight="bold"
                          border="0"
                          textAlign="center"
                        >
                          {elem.name}
                        </PopoverHeader>
                        <Center>
                          <Text mb={2}>{elem.description}</Text>
                        </Center>
                        {elem.hungerFill < 0 && (
                          <Center>
                            <Text>
                              {' '}
                              Lowers {Math.abs(elem.hungerFill)} hunger
                            </Text>
                          </Center>
                        )}
                        {elem.hungerFill > 0 && (
                          <Center>
                            <Text> Restores {elem.hungerFill} hunger</Text>
                          </Center>
                        )}
                      </PopoverContent>
                    </Popover>
                  ))}
                </SimpleGrid>
                <Box textAlign="center" mt={4}>
                  <Button
                    fontSize="2xl"
                    colorScheme="blue"
                    type="submit"
                    onClick={handleSubmit}
                  >
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
        </div>
      ) : (
        <div>
          <p>No data!</p>
        </div>
      )}
    </div>
  )
}

export default OtherPetInteraction
