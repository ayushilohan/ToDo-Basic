import React from 'react'
import Header from './components/Header'
import Cart from './pages/Cart';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}></Route>
        <Route path='/header' element={<Header />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App