import React, { useEffect, useState } from 'react'
import './Messages.css'
import SideNavbar from '../SideNavbar/SideNavbar'
import BottomNavbar from '../BottomNavbar/BottomNavbar'
import { Link } from 'react-router-dom'
export default function Messages() {

    const [mode, setmode] = useState(document.body.classList.contains('dark') ? true : false)

    // useEffect(()=>{
    //     setmode(!mode)
    // },[document.body.classList])
    let data = [
        { 'name': 'Virat', 'logo': 'V' },
        { 'name': 'Rohit', 'logo': 'R' },
        { 'name': 'Sachin', 'logo': 'S' },
        { 'name': 'Himesh', 'logo': 'H' },
        { 'name': 'Ashwin', 'logo': 'A' },
        { 'name': 'Paila', 'logo': 'P' },



    ]

    const chats = () => {
        const totalchats = data.map((user) => {
            return (
                <>
                    <Link to={`/messages/${user.name}`}>
                        <div className="indv-message py-5 px-1 d-flex  align-items-center">
                            <div className="logo-user p-3 text-light mx-3 bg-danger rounded-circle fs-4">{user.logo}</div>
                            <div className="name-user mx-2 fs-3">{user.name}</div>
                            <span class="badge ms-auto text-bg-primary rounded-pill">14</span>
                        </div>
                    </Link>
                    <hr />
                </>
            )
        })
        return totalchats
    }
    return (
        <>
            {window.innerWidth > 560 && <SideNavbar />}

            <div className={`main-box mx- px-2   `}>
                <div className="container-messages rounded-3 shadow-lg  ">
                    <div className="heading bg-primary d-flex justify-content-center align-items-center  rounded-top p-3 text-light">
                        <h2 className="message-heading m-0">Messages</h2>
                    </div>
                    <div className="messages-body p-2">

                        {chats()}
                    </div>
                </div>
            </div>
            {window.innerWidth < 560 && <BottomNavbar />}

        </>
    )
}
