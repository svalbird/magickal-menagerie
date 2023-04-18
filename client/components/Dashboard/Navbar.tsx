import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Link,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useAuth0 } from '@auth0/auth0-react'

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()
  const { logout } = useAuth0()
  return (
    <Box>
      <Flex
        bg={useColorModeValue('lavender', 'gray.300')}
        color={useColorModeValue('black.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={'none'}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
          >
            <img src="../../Images/logo_final.png" alt="logo" style={{height: 100, width:'100%'}}/>
          </Text>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Link
            as={'a'}
            fontSize={'sm'}
            fontWeight={600}
            variant={'link'}
            href={'/'}
            _hover={{ textDecoration: 'none', color: useColorModeValue('green.300', 'white') }}
          >
            Home
          </Link>
          <Link
            as={'a'}
            fontSize={'sm'}
            fontWeight={600}
            variant={'link'}
            href={'/explore'}
            _hover={{ textDecoration: 'none', color: useColorModeValue('green.300', 'white') }}
          >
            Explore
          </Link>
          <Link
            as={'a'}
            variant={'link'}
            fontSize={'sm'}
            fontWeight={600}
            href={'/profiles'}
            _hover={{ textDecoration: 'none', color: useColorModeValue('green.300', 'white') }}
          >
            Profiles
          </Link>
          <Link
            as={'a'}
            fontSize={'sm'}
            fontWeight={600}
            variant={'link'}
            onClick={(e) => {
              e.preventDefault()
              logout()
            }}
            _hover={{ textDecoration: 'none', color: useColorModeValue('green.300', 'white') }}
          >
            Logout
          </Link>
        </Stack>
      </Flex>
    </Box>
  )
}
