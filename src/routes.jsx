import { Routes, Route, useLocation } from 'react-router-dom'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Careers from './components/pages/Careers'
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio'
import FAQ from './components/pages/FAQ'
import Enrollment from './components/pages/Enrollment'
import PortfolioAdmin from './components/pages/PortfolioAdmin'
import AdminLogin from './components/pages/AdminLogin'
import ProtectedRoute from './components/common/ProtectedRoute'


function AnimatedRoutes() {
  const location = useLocation()

  return (
    <div key={location.pathname} className='page-enter'>
      <Routes location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/enrollment' element={<Enrollment />} />
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route
          path='/portfolio-admin'
          element={
            <ProtectedRoute>
              <PortfolioAdmin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default AnimatedRoutes
