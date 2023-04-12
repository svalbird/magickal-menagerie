import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Dashboard/Navbar'

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
