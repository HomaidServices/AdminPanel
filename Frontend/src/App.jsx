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
import Records from './Components/Records/Records'
import Bookingservices from './Components/Bookingservices/Bookingservices'
import Bookappointment from './Components/Book-Appointment/Bookappointment'
import Paymentmanagement from './Components/Payment-Management/Paymentmanagement'
import Instantbooking from './Components/Instant-Booking-Management/Instantbooking'
import Trackingcustomers from './Components/Trackingcustomers/Trackingcustomers'
import Timemanagement from './Components/Timemanagement/Timemanagement'
import CustomerManagement from './Components/CustomerManagement/CustomerManagement'
import Date from './Components/date/Date'
import Upcomingservices from './Components/Bookingservices/Upcomingservices'


function App() {
  // const [count, setCount] = useState(0)
  // const navigate=useNavigate()
  // navigate('/')
  // useEffect(()=>{
  // },[])
  return (
    <>
    
      {/* <Loginpage/> */}
      <BrowserRouter>
        <Routes>
          
          <Route exact path='/' element={<Loginpage />}></Route>
          <Route exact path='/main' element={<Main/>}></Route>
          <Route exact path='/records' element={<Records/>}></Route>
          <Route exact path='/maiddetails' element={<MaidDetails/>}></Route>
          <Route exact path='/analytics' element={<Analytics/>}></Route>
          <Route exact path='/Bookingservices' element={<Bookingservices/>}></Route>
          <Route exact path='/salesreport' element={<SalesReport/>}></Route>
          <Route exact path='/messages' element={<Messages/>}></Route>
          <Route exact path='/settings' element={<Settings/>}></Route>
          <Route exact path='/messages/:username' element={<IndvMessage/>}></Route>
          <Route exact path='/book-appointment' element={<Bookappointment/>}></Route>
          <Route exact path='/payment-management' element={<Paymentmanagement/>}></Route>
          <Route exact path='/instant-booking-management' element={<Instantbooking/>}></Route>
          <Route exact path='/trackingcustomers' element={<Trackingcustomers/>}></Route>
          <Route exact path='/timemanagement' element={<Timemanagement/>}></Route>
          <Route exact path='/customer-management' element={<CustomerManagement/>}></Route>
          <Route exact path='/date' element={<Date/>}></Route>
          <Route exact path='/upcoming-services' element={<Upcomingservices/>}></Route>

          
     


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
