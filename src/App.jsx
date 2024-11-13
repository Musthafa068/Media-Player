import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'  







function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
   
       <Routes>
          <Route element={ <Landing/> } path='/'/>
          <Route element={ <Home/> } path='/home'/>
          <Route element={ <History/> } path='/history'/>
       </Routes>
       
    <Footer/>
    </>
  )
}

export default App
