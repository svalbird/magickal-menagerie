import { useAuth0 } from '@auth0/auth0-react'
import SimpleThreeColumns from './Dashboard/ThreeColumns'

function Dashboard() {
  const { logout } = useAuth0()

  function handleClick() {
    logout()
  }
  return (
    <>
      <button onClick={handleClick}>Sign out</button>
      <SimpleThreeColumns />
    </>
  )
}

export default Dashboard
