import React from 'react'
import SideNavbar from "../SideNavbar/SideNavbar";

const Bookingservices = () => {
  return (

    <>
    
    {window.innerWidth > 560 && <SideNavbar />}
    
    <div className='dashboard'>Booking Services</div>
    


    </>
   
  )
}

export default Bookingservices