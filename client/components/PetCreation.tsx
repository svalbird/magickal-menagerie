import { FormEvent, useEffect, useState } from 'react'
import { fetchSpecies } from '../actions/speciesActions'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useNavigate } from 'react-router-dom'
import { NewPet } from '../../Model/pet'
import { addPet } from '../apis/petApi'
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Spinner,
} from '@chakra-ui/react'

function PetCreation() {
  const navigate = useNavigate()
  const species = useAppSelector((state) => state.species)
  const dispatch = useAppDispatch()
  const [pet, setPet] = useState<NewPet>({
    speciesId: 0,
    name: '',
  })

  const [name, setName] = useState({
    displayName: '',
  })
  const [selectedSpeciesId, setSelectedSpeciesId] = useState<number>(1)

  useEffect(() => {
    dispatch(fetchSpecies())
  }, [dispatch])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    addPet({ ...pet, speciesId: selectedSpeciesId })

    setPet({ speciesId: 0, name: '' })
    setName({ displayName: '' })
    setSelectedSpeciesId(1)
    navigate('/')
  }

  if (species.loading) {
    return (
      <Center>
        <Spinner />
      </Center>
    )
  }
  if (species.error) {
    return <></>
  }

  return (
    <Box
      border="1px solid #E2E8F0"
      boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
      p="4"
      borderRadius="md"
      width={1000}
    >
      <Flex direction="column" align="center">
        <Heading as="h1" my={4}>
          Add a new pet
        </Heading>{' '}
        <FormControl>
          <FormLabel htmlFor="display-name">Enter your Nickname</FormLabel>
          <Input
            type="text"
            id="display-name"
            value={name.displayName}
            onChange={(e) => {
              setName({ displayName: e.target.value })
            }}
          />
        </FormControl>
        <Flex wrap="wrap" justify="center" align="center" mb={4}>
          {species.data.map((singleSpecies) => (
            <Box
              key={singleSpecies.id}
              p={2}
              borderRadius="md"
              borderWidth={selectedSpeciesId === singleSpecies.id ? 2 : 0}
              borderColor="blue.500"
              onClick={() => setSelectedSpeciesId(singleSpecies.id)}
              cursor="pointer"
            >
              <Image
                src={singleSpecies.image}
                alt={singleSpecies.nam}
                boxSize="120px"
              />
            </Box>
          ))}
        </Flex>
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormControl>
            <FormLabel htmlFor="pet-name">Enter your pet name</FormLabel>
            <Input
              type="text"
              id="pet-name"
              value={pet.name}
              onChange={(e) => {
                setPet({ ...pet, name: e.target.value })
              }}
            />
          </FormControl>
          <Button
            mt={4}
            colorScheme="blue"
            type="submit"
            isDisabled={!selectedSpeciesId}
          >
            Add Pet
          </Button>
        </form>
      </Flex>
    </Box>
  )
}

export default PetCreation
