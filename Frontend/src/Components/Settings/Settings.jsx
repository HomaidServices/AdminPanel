import React, { useEffect, useState } from 'react'
import SideNavbar from '../SideNavbar/SideNavbar'
import './Settings.css'
import Modal from './Modal'
import BottomNavbar from '../BottomNavbar/BottomNavbar'
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Calendar from './Calendar'
export default function Settings() {
  // const [change,setChange]=useState({'username':'User','email':'user@gmail','password':'********'})
  console.log(document.body.classList.contains('dark'))
  const [mode, alterMode] = useState(document.body.classList.contains('dark') ? true : false)
  
  const user = { 'username': 'User', 'email': 'user@gmail', 'password': '********' }
  const handleClick = (e) => {
    // console.log(e.target.name)
    const inp = e.target.name
    if (inp == 'dark') {
      alterMode(mode => true)
      if (!document.body.classList.contains('dark'))
        document.body.classList.toggle('dark')

    }
    else {
      alterMode(mode => false)
      if (document.body.classList.contains('dark'))
        document.body.classList.toggle('dark')
    }


  }

  const socialaccount = [
    { 'facebook': ['friends', '20k'] },
    { 'instagram': ['followers', '30k'] },
    { 'linkedin': ['followers', '1k'] },
    { 'twitter': ['followers', '20k'] }
  ]

  const returncard = () => {
    const sc = socialaccount.map((acc, index) => {
      let name = Object.keys(acc)[0]
      return (
        <div className="col-lg-3 col-md-6 col-sm-12 my-2 border-top-0">
          <div class="card shadow" >
            <div className={`card-header d-flex justify-content-center ${name}`}>
              {name === 'instagram' && <FaInstagram className=" social-icon instagram-icon" />}
              {name === 'facebook' && <FaFacebook className=" social-icon facebook-icon" />}
              {name === 'linkedin' && <FaLinkedin className=" social-icon linkedin-icon" />}
              {name === 'twitter' && <FaTwitter className=" social-icon twitter-icon" />}

            </div>
            <div class="card-body ">
              <div className="container-fluid text-center fs-4">{acc[name][0]}</div>
              <div className="container-fluid text-center fs-3">{acc[name][1]}</div>
            </div>
          </div>
        </div>
      )
    })
    return sc

  }


  return (
    <>

      <Modal username={user.username} email={user.email} />

      {window.innerWidth > 560 && <SideNavbar />}

      <div className={`settings-box d-flex  overflow-auto `}>
        <div className="container-settings accordion p-2  ">
          <div className="user-settings accordion-item rounded shadow  p-2">
            <h2 class="accordion-header">
              <button class="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Personal settings
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div className="accordion-body d-flex flex-column" id='collapseOne'>
                <div className="username container-fluid p-2 fs-4  align-items-center">
                  Current Username
                  <p className="rounded mx-2 fs-4 bg-secondary p-2 overflow-auto">User</p>
                  <button className="btn btn-danger p-2  ms-auto" data-bs-toggle="modal" data-bs-target="#changeusername" id='username' >Change</button>
                </div>
                <hr />
                <div className="email  fs-4 p-2">
                  Current email
                  <p className="rounded bg-secondary p-2 mx-2 fs-4 overflow-auto">User@gmail.com</p>
                  <button className="btn btn-danger p-1 ms-auto" data-bs-toggle="modal" data-bs-target="#changeemail" id='Email' >Change</button>
                </div>
                <hr />
                <div className="password  justify-content-center p-2">
                  <button className="btn btn-danger p-2 " data-bs-toggle="modal" data-bs-target="#changepassword" id='password' >Change Password</button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="general-settings accordion-item rounded my-2 shadow p-2">
            <h2 class="accordion-header">
              <button class="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwo" aria-expanded="false" aria-controls="collapsetwo">
                General settings
              </button>
            </h2>
            <div id="collapsetwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body d-flex flex-column" id='collapseOne'>
                <div className="mode-alter d-flex">
                  <p className='fs-4'>Mode</p>
                  <button type="button" class="btn ms-auto btn-primary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                    {mode ? 'Dark' : 'Light'}
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#" name='light' onClick={handleClick} >Light</a></li>
                    <hr />
                    <li><a class="dropdown-item" href="#" name='dark' onClick={handleClick}>Dark</a></li>

                  </ul>
                </div>
                <hr />
                <div className="accept-decline my-2">
                  <div className='fs-4 cooking d-flex'>
                    <p>Cooking services </p>
                    <button className="btn btn-success ms-auto btn-sm"> Accept</button>
                    <button className="btn btn-danger ms-3 btn-sm">Decline</button>
                  </div>
                  <hr />
                  <div className='fs-4 cooking d-flex'>
                    <p>Cleaning services </p>
                    <button className="btn btn-success ms-auto btn-sm"> Accept</button>
                    <button className="btn btn-danger ms-3 btn-sm">Decline</button>
                  </div>
                </div>
                <hr />
                <div className="block-unblock my-2 d-flex">
                  <p className='mx-3'>Block User: </p>
                  <input type="text" placeholder='username' />
                  <button className="btn btn-danger mx-2">Block</button>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="row accounts  ">

            {returncard()}

          </div>
          <Calendar/>
        </div>
      </div>
      {window.innerWidth < 560 && <BottomNavbar />}

    </>
  )
}
