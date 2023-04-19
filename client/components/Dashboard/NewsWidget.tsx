import { Stack, Text } from '@chakra-ui/react'

const newsArray = [
  "It's a sunny day!",
  "There's a beautiful comet shining in the night sky",
  "The local farmer's market is in town today",
  'A new magic shop just opened up in town',
  'Magickland is hosting a festival next weekend',
  'The local theater is putting on a magic-themed play',
  'A rare flower is blooming in the enchanted forest',
  'A group of wizards have arrived in town for a conference',
  "Magickland's sports team just won the championship",
  'A mysterious figure has been seen wandering the streets at night',
  'A dragon was spotted flying over the town',
]

const eventsArray = [
  'Strange sounds from the Secret Cave...',
  "There's a freakish kind of energy hanging in the air...",
  'A magical portal has opened up in the town square',
  'A group of fairies have taken up residence in the park',
  'A curse has befallen the local bakery',
  'A ghost has been haunting the old mansion on the hill',
  'A powerful wizard is seeking an apprentice',
  'A band of goblins has been terrorizing the nearby village',
  'A rare artifact has been discovered in the ruins of an old castle',
  'A powerful storm is brewing in the mountains',
  'A magical creature has escaped from the local zoo',
]

function NewsWidget() {
  const news = newsArray[Math.floor(Math.random() * newsArray.length)]

  const event = eventsArray[Math.floor(Math.random() * eventsArray.length)]

  return (
    <Stack
      w="100%"
      h="100%"
      bg="#DB58AB"
      boxShadow="lg"
      borderRadius="md"
      p={4}
      spacing={4}
      maxW="750px"
      align="center"
    >
      <Text fontWeight={600}>{`Magickland News`}</Text>
      <Text fontWeight={450}>{news}</Text>
      <Text fontWeight={450}>{event}</Text>
    </Stack>
  )
}

export default NewsWidget
