import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Loginpage from './Components/LoginPage/Loginpage'
import Main from './Components/Main/Main'
import Analytics from './Components/Analytics/Analytics'
import SalesReport from './Components/SalesReport/SalesReport'
import Messages from './Components/Messages/Messages'
import Settings from './Components/Settings/Settings'
import MaidDetails from './Components/MaidDetails/MaidDetails'
import IndvMessage from './Components/Messages/IndvMessage'
import { useNavigate } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)
  // const navigate=useNavigate()
  // navigate('/')
  // useEffect(()=>{
  // },[])
  return (
    <>
    
    
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Loginpage />}></Route>
          <Route exact path='/main' element={<Main/>}></Route>
          <Route exact path='/maiddetails' element={<MaidDetails/>}></Route>
          <Route exact path='/analytics' element={<Analytics/>}></Route>
          <Route exact path='/salesreport' element={<SalesReport/>}></Route>
          <Route exact path='/messages' element={<Messages/>}></Route>
          <Route exact path='/settings' element={<Settings/>}></Route>
          <Route exact path='/messages/:username' element={<IndvMessage/>}></Route>


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
