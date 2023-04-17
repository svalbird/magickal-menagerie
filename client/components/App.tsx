import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { setAccessToken } from '../actions/tokenActions'
import { checkUserData } from '../apis/displayName'
import { useAppDispatch } from '../hooks/hooks'
import Dashboard from './Dashboard'
import Login from './Login'
import MainLayout from './MainLayout'

import WorldMap from './WorldMap'

import PetCreation from './PetCreation'

import Profiles from './Profiles'

import PetInteractionDashboard from './PetIntearctionDashboard'
import SandyCove from './Explore/RefSandyCove'

function App() {
  const {
    isAuthenticated,
    getAccessTokenSilently,
    isLoading: auth0isLoading,
  } = useAuth0()
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    async function fetchData() {
      try {
        const token = await getAccessTokenSilently()
        dispatch(setAccessToken(token))
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
  }, [isAuthenticated, location, dispatch, navigate, getAccessTokenSilently])

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
          {/* <Route path="/login" element={<LandingPage />} /> */}
          <Route path="/explore" element={<WorldMap />} />

          <Route path="/sandy-cove" element={<SandyCove />} />

          <Route path="/creation" element={<PetCreation />} />
          <Route path="/profiles" element={<Profiles />} />

          <Route path="/petInteraction" element={<PetInteractionDashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
