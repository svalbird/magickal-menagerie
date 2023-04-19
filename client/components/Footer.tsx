import {
  Box,
  Container,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      bgGradient="linear-gradient(180deg, #547FDE 0%, #F7A380 100% )"
      color={useColorModeValue('gray.700', 'gray.200')}
      bottom={0}
      left={0}
      right={0}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={1}
        spacing={1}
        justify={'center'}
        align={'center'}
      >
        <Box maxW="225px">
          <Image
            src="/Images/logo_final.png"
            alt="logo"
            objectFit="contain"
            w="100%"
            h="100%"
          />
        </Box>
        <Stack direction={'row'} spacing={6}>
          <Link href={'/'}>Home</Link>
          <Link href={'/explore'}>Explore</Link>
          <Link href={'/profiles'}>Profiles</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'center' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text align={'center'}>
            © 2023 Magickal Menagerie. All rights reserved
          </Text>
        </Container>
      </Box>
    </Box>
  )
}
