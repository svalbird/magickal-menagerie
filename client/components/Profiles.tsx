import {
  Box,
  Center,
  Spinner,
  Image,
  Heading,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Progress,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AllPets } from '../../Model/pet'
import { fetchAllPets } from '../actions/allpetActions'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

function Profiles() {
  const allPets = useAppSelector((state) => state.allPets)
  const dispatch = useAppDispatch()
  const [selectedPet, setSelectedPet] = useState<AllPets | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchAllPets())
  }, [dispatch])

  const handleBoxClick = (pet: AllPets) => {
    setSelectedPet(pet)
  }

  const handleCloseModal = () => {
    setSelectedPet(null)
  }

  if (allPets.loading) {
    return (
      <Center mt="4">
        <Spinner />
      </Center>
    )
  }
  if (allPets.error) {
    return <></>
  }

  if (allPets.data)
    return (
      <>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="40px" p="40px">
          {allPets.data.map((pet) => {
            return (
              <Box
                key={pet.id}
                p="4"
                borderRadius="lg"
                boxShadow="md"
                cursor="pointer"
                onClick={() => handleBoxClick(pet)}
                transition="all 0.2s ease-in-out"
                _hover={{
                  boxShadow: 'lg',
                  transform: 'scale(1.05)',
                }}
              >
                <Center>
                  <Image
                    src={pet.petImage}
                    alt={pet.petName}
                    boxSize="120px"
                    borderRadius="full"
                    boxShadow="md"
                  />
                </Center>
                <Heading
                  as="h1"
                  my={4}
                  textAlign="center"
                  fontSize="2xl"
                  fontWeight="bold"
                >
                  Pet Name:{pet.petName}
                </Heading>
                <Text my={4} textAlign="center" fontSize="lg" color="gray.500">
                  Owner Name:{pet.userDisplayName}
                </Text>
              </Box>
            )
          })}
        </SimpleGrid>
        {selectedPet && (
          <Modal isOpen={Boolean(selectedPet)} onClose={handleCloseModal}>
            <ModalOverlay />
            <ModalContent
              w="100%"
              h="80%"
              bg="white"
              boxShadow="lg"
              borderRadius="md"
              p={4}
              maxW="500px"
            >
              <Center>
                <ModalHeader fontSize="2xl" fontWeight="bold">
                  {selectedPet.userDisplayName}
                </ModalHeader>
              </Center>
              <ModalBody>
                <Center>
                  <Box w="50%" h="40%">
                    <Image
                      w="100%"
                      h="100%"
                      src={selectedPet.petImage}
                      alt={selectedPet.petName}
                      objectFit="cover"
                      boxShadow="lg"
                      borderRadius="full"
                    />
                  </Box>
                </Center>
                <Center>
                  <Heading as="h2" my={4}>
                    Pet Name:{selectedPet.petName}
                  </Heading>
                </Center>
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="space-around"
                  h="40%"
                >
                  <Box>
                    <Text fontWeight={600}>Level: {selectedPet.level}</Text>
                    <Progress
                      value={selectedPet.level}
                      size="xs"
                      colorScheme="green"
                    />
                  </Box>
                  <Box>
                    <Text color={'gray.600'}>
                      Exp: {`${selectedPet.xpCurrent} / 100`}
                    </Text>
                    <Progress value={selectedPet.xpCurrent} size="xs" />
                  </Box>
                  <Box>
                    <Text fontWeight={600}>
                      Health:
                      {`${selectedPet.hpCurrent} / ${selectedPet.hpMax}`}
                    </Text>
                    <Progress
                      value={selectedPet.hpCurrent}
                      size="xs"
                      colorScheme="red"
                    />
                  </Box>
                  <Box>
                    <Text color={'gray.600'}>
                      Hunger:
                      {`${selectedPet.hungerCurrent} / ${selectedPet.hungerMax}`}
                    </Text>
                    <Progress
                      value={selectedPet.hungerCurrent}
                      size="xs"
                      colorScheme="orange"
                    />
                  </Box>
                </Flex>
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() => navigate(`/petinteraction/${selectedPet.id}`)}
                >
                  Take me to pet interactions
                </Button>
                <Button variant="ghost" onClick={handleCloseModal}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </>
    )
  return null
}

export default Profiles
