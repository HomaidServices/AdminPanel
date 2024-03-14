import React, { useState } from 'react'
import './Loginpage.css'
import { useNavigate } from 'react-router-dom'
import img from '../../assets/logo.webp'
import axios from 'axios';
export default function Loginpage() {
    const navigate = useNavigate();
    const [status,updateStatus]=useState('')
    const handleSubmit = async(event) => {
        // document.body.style.backgroundImage='none'
        event.preventDefault()
        const username=document.getElementById('username').value
        const password=document.getElementById('password').value
        let user={
            username:username,
            password:password
        }
        console.log(user)
        await axios.post('http://localhost:3000/',user).then((result)=>{
            let res=result.data
            if(res==='Correct'){
                console.log('Yay')
                updateStatus('')
                navigate('/main')
            }
            else{
                updateStatus(res)
            }
        }).catch((error)=>{
            console.log(error)
        })
        // 
    }

    return (
        <div className="outer overflow-hidden" >
            <div className="container">
                <img src={img} alt="error" className="admin-logo" />
                <h2>Homaid Services</h2>
                <h2>Admin Panel</h2>
                <form id="signInForm" method="post" onSubmit={handleSubmit}>
                    <input type="text" name="username" id="username" placeholder="Username" required />
                    <input type="password" name="password" id="password" placeholder="Password" required />
                    <input type="submit" value="Sign In" />
                </form>
                <div className="my-2 text-center text-danger">{status}</div>
            </div>
        </div>
    )
}
