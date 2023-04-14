import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
  Outlet,
} from 'react-router-dom'
import { checkUserData } from '../apis/displayName'
import Dashboard from './Dashboard'
import Login from './Login'
import MainLayout from './MainLayout'
import PetCreation from './PetCreation'
import Profiles from './Profiles'

function App() {
  const {
    isAuthenticated,
    getAccessTokenSilently,
    isLoading: auth0isLoading,
  } = useAuth0()
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    async function fetchData() {
      try {
        const token = await getAccessTokenSilently()
        const exists = await checkUserData(token)

        if (!exists && !location.pathname.includes('/creation')) {
          return navigate('/creation')
        }
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    if (isAuthenticated) {
      fetchData()
    }
  }, [isAuthenticated, location, navigate, getAccessTokenSilently])

  if (auth0isLoading) {
    return <div>Loading</div>
  }

  if (!isAuthenticated) {
    return <Login />
  }

  if (isLoading) {
    return <div>Loading</div>
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/creation" element={<PetCreation />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
