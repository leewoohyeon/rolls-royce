import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Phantom from './pages/Phantom/Phantom'
import Brand from './pages/Brand/Brand'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phantom" element={<Phantom />} />
        <Route path="/brand" element={<Brand />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
