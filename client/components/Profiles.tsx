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
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { AllPets } from '../../Model/pet'
import { fetchAllPets } from '../actions/allpetActions'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

function Profiles() {
  const allPets = useAppSelector((state) => state.allPets)
  const dispatch = useAppDispatch()
  const [selectedPet, setSelectedPet] = useState<AllPets | null>(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    dispatch(fetchAllPets())
  }, [dispatch])

  const handleBoxClick = (pet: AllPets) => {
    setSelectedPet(pet)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setSelectedPet(null)
    setShowModal(false)
  }

  if (allPets.loading) {
    return (
      <Center>
        <Spinner />
      </Center>
    )
  }
  if (allPets.error) {
    return <></>
  }
  // allpets: Allpets[]
  // pet : Allpets

  return (
    <>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="40px" p="40px">
        {allPets.data.map((pet) => {
          return (
            <Box
              key={pet.id}
              p="4"
              borderRadius="md"
              boxShadow="md"
              cursor="pointer"
              onClick={() => handleBoxClick(pet)}
            >
              <Center>
                <Image src={pet.petImage} alt={pet.petName} boxSize="120px" />
              </Center>
              <Heading as="h1" my={4} textAlign="center">
                Pet Name:{pet.petName}
              </Heading>
              <Heading as="h1" my={4} textAlign="center">
                Owner Name:{pet.userDisplayName}
              </Heading>
            </Box>
          )
        })}
      </SimpleGrid>
      {selectedPet && (
        <Modal isOpen={showModal} onClose={handleCloseModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedPet.petName}</ModalHeader>
            <ModalBody>
              <Image src={selectedPet.petImage} alt={selectedPet.petName} />
              <Heading as="h2" my={4}>
                Owner Name: {selectedPet.userDisplayName}
              </Heading>
              <p>Current Pet Hp: {selectedPet.hpCurrent}</p>
              <p>Max Hp: {selectedPet.hpMax}</p>
              <p>Current Per Hunger: {selectedPet.hungerCurrent}</p>
              <p>Max Hunger: {selectedPet.hungerMax}</p>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
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
}

export default Profiles
