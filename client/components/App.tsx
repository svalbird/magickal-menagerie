import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import MainLayout from './MainLayout'
import PetCreation from './PetCreation'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="/login" element={<LandingPage />} /> */}
          <Route path="/creation" element={<PetCreation />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
