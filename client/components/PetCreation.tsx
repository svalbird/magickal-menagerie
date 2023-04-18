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
  Text,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverHeader,
  Spinner,
} from '@chakra-ui/react'
import { addDisplayname } from '../apis/displayName'

function PetCreation() {
  const navigate = useNavigate()
  const species = useAppSelector((state) => state.species)
  const { accessToken } = useAppSelector((state) => state.token)
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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (accessToken) {
      await addDisplayname(name, accessToken)
      setName({ displayName: '' })
      await addPet({ ...pet, speciesId: selectedSpeciesId }, accessToken)
      setPet({ speciesId: 0, name: '' })

      setSelectedSpeciesId(1)
      navigate('/')
    }
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
      width="100%"
      backgroundImage="url(/Images/login-page.jpg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      backgroundSize="cover"
      height="90lvh"
      overflow="auto"
    >
      <Center>
        <Box
          border="1px solid #F7A380"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
          p="4"
          borderRadius="md"
          width={1000}
          minHeight={800}
          backgroundColor="#0D53AC"
          mt={16}
        >
          <Center mt={24} mb={24}>
            <Flex direction="column" align="center">
              <Heading as="h1" my={4} color="white">
                Add a new pet
              </Heading>{' '}
              <Flex wrap="wrap" justify="center" align="center" mt={10} mb={10}>
                {species.data.map((singleSpecies) => (


                  <Popover key={singleSpecies.id} placement="right">
                    <PopoverTrigger>
                      <Box
                        p={2}
                        borderRadius="md"
                        borderWidth={
                          selectedSpeciesId === singleSpecies.id ? 2 : 0
                        }
                        borderColor="blue.500"
                        onClick={() => setSelectedSpeciesId(singleSpecies.id)}
                        cursor="pointer"
                        ml={10}
                      >
                        <Image
                          src={singleSpecies.image}
                          alt={singleSpecies.name}
                          boxSize="120px"
                        />
                      </Box>
                    </PopoverTrigger>
                    <PopoverContent maxW="200px">
                      <PopoverHeader
                        fontWeight="bold"
                        border="0"
                        textAlign="center"
                      >
                        {singleSpecies.name}
                      </PopoverHeader>
                      <Center>
                        <Text textAlign="center" justifyContent="center" mb={2}>
                          {singleSpecies.description}
                        </Text>
                      </Center>
                      <Center>
                        <Text textAlign="center" justifyContent="center">
                          {' '}
                          Loves {singleSpecies.fave_food}
                        </Text>
                      </Center>
                    </PopoverContent>
                  </Popover>

                ))}
              </Flex>
              <form onSubmit={(e) => handleSubmit(e)}>
                <FormControl>
                  <FormLabel htmlFor="display-name" color="white">
                    Enter your Nickname
                  </FormLabel>
                  <Input
                    required
                    type="text"
                    bg="white"
                    borderColor="#F7A380"
                    id="display-name"
                    value={name.displayName}
                    onChange={(e) => {
                      setName({ displayName: e.target.value })
                    }}
                    
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="pet-name" color="white">Enter your pet name</FormLabel>
                  <Input
                    required
                    bg="white"
                    type="text"
                    borderColor="#F7A380"
                    id="pet-name"
                    value={pet.name}
                    onChange={(e) => {
                      setPet({ ...pet, name: e.target.value })
                    }}
                  />
                </FormControl>
                <Center>
                  <Button
                    mt={10}
                    type="submit"
                    isDisabled={!selectedSpeciesId}
                    bg="#F7A380"
                    colorScheme="orange"
                  >
                    Add Pet
                  </Button>
                </Center>
              </form>
            </Flex>
          </Center>
        </Box>
      </Center>
    </Box>
  )
}

export default PetCreation
