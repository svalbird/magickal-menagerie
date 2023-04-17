import { Flex, Center, Box, Image } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { fetchUser, updateUser } from '../../actions/walletActions'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'

interface Outcome {
  outcomeText: string
  changeMoney?: number
  changeHP?: number
  changeXP?: number
  changeHunger?: number
  addItem?: number
  checkItem?: number
  removeItem?: number
}

export interface Event {
  choiceText: string
  outcomes: Outcome[]
  chance: number
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

  useEffect(() => {
    if (accessToken) dispatch(fetchUser(accessToken))
  }, [dispatch, accessToken])

  function rollChance(successChance: number) {
    if (Math.random() * 100 < successChance) {
      return true
    }
    return false
  }

  function handleClick(dialogOption: number) {
    if (dialogOption === -1) {
      setOption([-1, 0])
    } else {
      props.events.forEach((eventSet, index) => {
        if (index === dialogOption) {
          if (eventSet.outcomes.length > 1) {
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

  if (option[0] === -2) {
    return (
      <div
        style={{
          backgroundImage: `url(/Images/${props.bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          width: '100%',
          height: '80vh',
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
          src={'Images/creature.gif'}
          alt={''}
          style={{
            position: 'absolute',
            left: '10%',
            bottom: '40px',
            width: '200px',
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
          height: '80vh',
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
          </Flex>
        </Center>

        <Image
          src={'Images/creature.gif'}
          alt={''}
          style={{
            position: 'absolute',
            left: '10%',
            bottom: '40px',
            width: '200px',
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
          height: '80vh',
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
          src={'Images/creature.gif'}
          alt={''}
          style={{
            position: 'absolute',
            left: '10%',
            bottom: '40px',
            width: '200px',
          }}
        />
      </div>
    )
  }
}

export default Location
