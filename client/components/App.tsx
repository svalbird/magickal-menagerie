import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import MainLayout from './MainLayout'

import WorldMap from './WorldMap'

import PetCreation from './PetCreation'

import Profiles from './Profiles'

import PetInteractionDashboard from './PetIntearctionDashboard'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="/login" element={<LandingPage />} /> */}

          <Route path="/explore" element={<WorldMap />} />

          <Route path="/creation" element={<PetCreation />} />

          <Route path="/profiles" element={<Profiles />} />

          <Route path="/petInteraction" element={<PetInteractionDashboard />} />


        </Route>
      </Routes>
    </>
  )
}

export default App
