import { Flex, Center, Box, Image } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { fetchUser, updateUser } from '../../actions/walletActions'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { addNewItem } from '../../actions/inventory'
import {
  fetchPetData,
  updatePetInteraction,
} from '../../actions/petInteractions'
import { useNavigate } from 'react-router-dom'

interface Outcome {
  outcomeText: string
  changeMoney?: number
  changeHunger?: number
  addItem?: number
}

export interface Event {
  choiceText: string
  outcomes: Outcome[]
  chance: number
  isHungerCheck?: boolean
}

interface Props {
  bgImage: string
  locationName: string
  locationText: string
  events: Event[]
}

function Location(props: Props) {
  const [option, setOption] = useState([-1, 0])
  const dispatch = useAppDispatch()
  const { accessToken } = useAppSelector((state) => state.token)
  const user = useAppSelector((state) => state.user)
  const pet = useAppSelector((state) => state.petInteractions)
  const navigate = useNavigate()

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchUser(accessToken))
      dispatch(fetchPetData(accessToken))
    }
  }, [dispatch, accessToken])

  function rollChance(successChance: number) {
    if (Math.random() * 100 < successChance) {
      return true
    }
    return false
  }
  console.log(pet)
  if (pet.loading) {
    return <></>
  }
  if (pet.error) {
    return <></>
  }
  let petImage = 'Images/creature.gif'
  if (pet.data) {
    petImage = pet.data[0].image
  }

  function handleClick(dialogOption: number) {
    if (dialogOption === -1) {
      setOption([-1, 0])
    } else {
      props.events.forEach((eventSet, index) => {
        if (index === dialogOption) {
          if (
            pet.data &&
            pet.data[0].hungerCurrent <= 0 &&
            eventSet.isHungerCheck
          ) {
            setOption([-3, 0])
          } else if (eventSet.outcomes.length > 1) {
            if (user.data && rollChance(eventSet.chance)) {
              if (eventSet.outcomes[0].changeMoney) {
                const updatedUser = {
                  id: user.data.id,
                  auth0_id: user.data.auth0_id,
                  display_name: user.data.display_name,
                  money: user.data.money + eventSet.outcomes[0].changeMoney,
                }
                dispatch(updateUser(updatedUser))
              }
              if (eventSet.outcomes[0].addItem && accessToken) {
                const newItem = {
                  auth0Id: user.data.auth0_id,
                  itemId: eventSet.outcomes[0].addItem,
                }
                dispatch(addNewItem(newItem, accessToken))
              }
              if (
                accessToken &&
                pet.data &&
                eventSet.outcomes[0].changeHunger
              ) {
                console.log(eventSet.outcomes[0].changeHunger)
                let updatedHunger = pet.data[0].hungerCurrent
                if (updatedHunger + eventSet.outcomes[0].changeHunger > 100) {
                  updatedHunger = 100
                } else if (
                  updatedHunger + eventSet.outcomes[0].changeHunger <
                  0
                ) {
                  updatedHunger = 0
                } else {
                  updatedHunger =
                    updatedHunger + eventSet.outcomes[0].changeHunger
                }
                const newPetData = {
                  ...pet.data[0],
                  hungerCurrent: updatedHunger,
                }
                dispatch(updatePetInteraction(newPetData, accessToken))
              }

              setOption([index, 0])
            } else if (user.data) {
              if (eventSet.outcomes[1].changeMoney) {
                const updatedUser = {
                  id: user.data.id,
                  auth0_id: user.data.auth0_id,
                  display_name: user.data.display_name,
                  money: user.data.money + eventSet.outcomes[1].changeMoney,
                }
                dispatch(updateUser(updatedUser))
              }
              if (eventSet.outcomes[1].addItem && accessToken) {
                const newItem = {
                  auth0Id: user.data.auth0_id as string,
                  itemId: eventSet.outcomes[0].addItem as number,
                }
                dispatch(addNewItem(newItem, accessToken))
              }
              if (
                accessToken &&
                pet.data &&
                eventSet.outcomes[0].changeHunger
              ) {
                let updatedHunger = pet.data[0].hungerCurrent
                if (updatedHunger + eventSet.outcomes[0].changeHunger > 100) {
                  updatedHunger = 100
                } else if (
                  updatedHunger + eventSet.outcomes[0].changeHunger <
                  0
                ) {
                  updatedHunger = 0
                } else {
                  updatedHunger =
                    updatedHunger + eventSet.outcomes[0].changeHunger
                }
                const newPetData = {
                  ...pet.data[0],
                  hungerCurrent: updatedHunger,
                }
                dispatch(updatePetInteraction(newPetData, accessToken))
              }
              setOption([index, 1])
            }
          } else if (user.data) {
            if (eventSet.outcomes[0].changeMoney) {
              if (
                eventSet.outcomes[0].changeMoney < 0 &&
                user.data.money < Math.abs(eventSet.outcomes[0].changeMoney)
              ) {
                setOption([-2, 0])
              } else {
                const updatedUser = {
                  id: user.data.id,
                  auth0_id: user.data.auth0_id,
                  display_name: user.data.display_name,
                  money: user.data.money + eventSet.outcomes[0].changeMoney,
                }
                dispatch(updateUser(updatedUser))
                if (eventSet.outcomes[0].addItem && accessToken) {
                  const newItem = {
                    auth0Id: user.data.auth0_id,
                    itemId: eventSet.outcomes[0].addItem,
                  }
                  dispatch(addNewItem(newItem, accessToken))
                }
                if (
                  accessToken &&
                  pet.data &&
                  eventSet.outcomes[0].changeHunger
                ) {
                  let updatedHunger = pet.data[0].hungerCurrent
                  if (updatedHunger + eventSet.outcomes[0].changeHunger > 100) {
                    updatedHunger = 100
                  } else if (
                    updatedHunger + eventSet.outcomes[0].changeHunger <
                    0
                  ) {
                    updatedHunger = 0
                  } else {
                    updatedHunger =
                      updatedHunger + eventSet.outcomes[0].changeHunger
                  }
                  const newPetData = {
                    ...pet.data[0],
                    hungerCurrent: updatedHunger,
                  }
                  dispatch(updatePetInteraction(newPetData, accessToken))
                }
                setOption([index, 0])
              }
            } else {
              setOption([index, 0])
            }
          }
        }
      })
    }
  }

  if (option[0] === -3) {
    return (
      <div
        style={{
          backgroundImage: `url(/Images/${props.bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          width: '100%',
          minHeight: '83vh',
          position: 'relative',
        }}
      >
        <Box
          border="1px solid #E2E8F0"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
          p="4"
          borderRadius="md"
          width={200}
          style={{
            textAlign: 'center',
            fontSize: 'large',
            backgroundColor: 'rgba(255,255,255, 0.6)',
          }}
        >
          <strong>{`${props.locationName}`}</strong>
        </Box>
        <Center>
          <Flex direction="column" align="center">
            <Box
              border="1px solid #E2E8F0"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
              p="4"
              borderRadius="md"
              width={800}
              style={{
                textAlign: 'center',
                fontSize: 'medium',
                backgroundColor: 'rgba(255,255,255, 0.6)',
              }}
            >
              {`Your pet is desperately hungry... perhaps they need some food first.`}
            </Box>
            <Box
              border="1px solid #E2E8F0"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
              p="4"
              borderRadius="md"
              width={800}
              style={{
                textAlign: 'center',
                fontSize: 'medium',
                backgroundColor: 'rgba(255,255,255, 0.6)',
                marginTop: '10px',
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}
              onClick={() => handleClick(-1)}
            >
              {`Back`}
            </Box>
          </Flex>
        </Center>

        <Image
          src={petImage}
          alt={''}
          style={{
            position: 'absolute',
            left: '10%',
            bottom: '1%',
            width: '12%',
          }}
        />
      </div>
    )
  }

  if (option[0] === -2) {
    return (
      <div
        style={{
          backgroundImage: `url(/Images/${props.bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          width: '100%',
          minHeight: '83vh',
          position: 'relative',
        }}
      >
        <Box
          border="1px solid #E2E8F0"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
          p="4"
          borderRadius="md"
          width={200}
          style={{
            textAlign: 'center',
            fontSize: 'large',
            backgroundColor: 'rgba(255,255,255, 0.6)',
          }}
        >
          <strong>{`${props.locationName}`}</strong>
        </Box>
        <Center>
          <Flex direction="column" align="center">
            <Box
              border="1px solid #E2E8F0"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
              p="4"
              borderRadius="md"
              width={800}
              style={{
                textAlign: 'center',
                fontSize: 'medium',
                backgroundColor: 'rgba(255,255,255, 0.6)',
              }}
            >
              {`You don't have enough money...`}
            </Box>
            <Box
              border="1px solid #E2E8F0"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
              p="4"
              borderRadius="md"
              width={800}
              style={{
                textAlign: 'center',
                fontSize: 'medium',
                backgroundColor: 'rgba(255,255,255, 0.6)',
                marginTop: '10px',
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}
              onClick={() => handleClick(-1)}
            >
              {`Back`}
            </Box>
          </Flex>
        </Center>

        <Image
          src={petImage}
          alt={''}
          style={{
            position: 'absolute',
            left: '10%',
            bottom: '1%',
            width: '12%',
          }}
        />
      </div>
    )
  }

  if (option[0] === -1) {
    return (
      <div
        style={{
          backgroundImage: `url(/Images/${props.bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          width: '100%',
          minHeight: '83vh',
          position: 'relative',
        }}
      >
        <Flex direction="row" justify-content="space-between" align="center">
          <Box
            border="1px solid #E2E8F0"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
            p="4"
            borderRadius="md"
            width={200}
            style={{
              textAlign: 'center',
              fontSize: 'large',
              backgroundColor: 'rgba(255,255,255, 0.6)',
            }}
          >
            <strong>{`${props.locationName}`}</strong>
          </Box>
          <Box
            border="1px solid #E2E8F0"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
            p="4"
            borderRadius="md"
            width={200}
            style={{
              textAlign: 'center',
              fontSize: 'large',
              backgroundColor: 'rgba(255,255,255, 0.6)',
            }}
          >
            {' '}
            ${user?.data?.money}{' '}
          </Box>
        </Flex>
        <Center>
          <Flex direction="column" align="center">
            <Box
              border="1px solid #E2E8F0"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
              p="4"
              borderRadius="md"
              width={800}
              style={{
                textAlign: 'center',
                fontSize: 'medium',
                backgroundColor: 'rgba(255,255,255, 0.6)',
              }}
            >
              {`${props.locationText}`}
            </Box>
            {props.events.map((eventSet, index) => {
              return (
                <Box
                  key={index}
                  border="1px solid #E2E8F0"
                  boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
                  p="4"
                  borderRadius="md"
                  width={800}
                  style={{
                    textAlign: 'center',
                    fontSize: 'medium',
                    backgroundColor: 'rgba(255,255,255, 0.6)',
                    marginTop: '10px',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                  }}
                  onClick={() => handleClick(index)}
                >
                  {`${eventSet.choiceText}`}
                </Box>
              )
            })}
            <Box
              border="1px solid #E2E8F0"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
              p="4"
              borderRadius="md"
              width={800}
              style={{
                textAlign: 'center',
                fontSize: 'medium',
                backgroundColor: 'rgba(255,255,255, 0.6)',
                marginTop: '10px',
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}
              onClick={() => navigate(`/explore`)}
            >
              Return to the map
            </Box>
          </Flex>
        </Center>

        <Image
          src={petImage}
          alt={''}
          style={{
            position: 'absolute',
            left: '10%',
            bottom: '1%',
            width: '12%',
          }}
        />
      </div>
    )
  } else {
    return (
      <div
        style={{
          backgroundImage: `url(/Images/${props.bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          width: '100%',
          minHeight: '83vh',
          position: 'relative',
        }}
      >
        <Box
          border="1px solid #E2E8F0"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
          p="4"
          borderRadius="md"
          width={200}
          style={{
            textAlign: 'center',
            fontSize: 'large',
            backgroundColor: 'rgba(255,255,255, 0.6)',
          }}
        >
          <strong>{`${props.locationName}`}</strong>
        </Box>
        <Center>
          <Flex direction="column" align="center">
            <Box
              border="1px solid #E2E8F0"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
              p="4"
              borderRadius="md"
              width={800}
              style={{
                textAlign: 'center',
                fontSize: 'medium',
                backgroundColor: 'rgba(255,255,255, 0.6)',
              }}
            >
              {`${props.events[option[0]].outcomes[option[1]].outcomeText}`}
            </Box>
            <Box
              border="1px solid #E2E8F0"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
              p="4"
              borderRadius="md"
              width={800}
              style={{
                textAlign: 'center',
                fontSize: 'medium',
                backgroundColor: 'rgba(255,255,255, 0.6)',
                marginTop: '10px',
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}
              onClick={() => handleClick(-1)}
            >
              {`Back`}
            </Box>
          </Flex>
        </Center>

        <Image
          src={petImage}
          alt={''}
          style={{
            position: 'absolute',
            left: '10%',
            bottom: '1%',
            width: '12%',
          }}
        />
      </div>
    )
  }
}

export default Location
