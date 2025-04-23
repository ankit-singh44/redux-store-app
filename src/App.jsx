import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter> 
  )
}

export default App
