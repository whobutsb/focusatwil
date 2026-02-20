import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import HomePage from './HomePage.jsx'
import About from './pages/About.jsx'
import Careers from './pages/Careers.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="careers" element={<Careers />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
      </Route>
    </Routes>
  )
}

export default App
