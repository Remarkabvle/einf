import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Header from './components/header/Header'
import Shop from './pages/shop-all/Shop'
import Blog from './pages/blog/Blog'
import Footer from './components/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/shop-all' element={<Shop />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
