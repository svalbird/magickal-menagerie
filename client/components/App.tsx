import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import MainLayout from './MainLayout'
import PetCreation from './PetCreation'
import Profiles from './Profiles'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="/login" element={<LandingPage />} /> */}
          <Route path="/creation" element={<PetCreation />} />
          <Route path="/profiles" element={<Profiles />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
