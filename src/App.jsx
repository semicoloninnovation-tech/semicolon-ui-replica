import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import AppRoutes from './routes'
import CustomCursor from './components/common/CustomCursor'
import { AuthProvider } from './context/AuthContext'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <CustomCursor />
        <ScrollToTop />
        <Header />
        <AppRoutes />
        <Footer />
      </AuthProvider>
    </HelmetProvider>
  )
}

export default App