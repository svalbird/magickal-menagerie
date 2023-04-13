import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import MainLayout from './MainLayout'
import WorldMap from './WorldMap'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="/login" element={<LandingPage />} /> */}
          <Route path="/explore" element={<WorldMap />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
