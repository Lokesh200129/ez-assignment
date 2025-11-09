
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { lazy, Suspense } from 'react'
import Layout from './layout/Layout'
const Hero = lazy(() => import('./pages/HeroPage'))
const About = lazy(() => import('./pages/AboutPage'))
const Services = lazy(() => import('./pages/ServicesPage'))
const Portfolio = lazy(() => import('./pages/PortfolioPage'))
const Contact = lazy(() => import('./pages/ContactPage'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
