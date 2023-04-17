import { ReactElement, useEffect } from 'react'
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Image,
  Progress,
} from '@chakra-ui/react'
import { FcDonate, FcInTransit } from 'react-icons/fc'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchPetData } from '../../actions/petInteractions'

interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function SimpleThreeColumns() {
  const petInteractions = useAppSelector((state) => state.petInteractions)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchPetData())
  }, [dispatch])
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {petInteractions.data && (
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
        )}
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Unlimited Donations'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Instant Delivery'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
    </Box>
  )
}
