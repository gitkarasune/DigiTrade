import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Coin from './Pages/Coin'
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coin/:coinId' element={<Coin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App