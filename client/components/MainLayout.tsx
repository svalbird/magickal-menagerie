import { Outlet } from 'react-router-dom'
import Footer from './Footer'

import WithSubnavigation from './Dashboard/Navbar'

function MainLayout() {
  return (
    <>
      <WithSubnavigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
