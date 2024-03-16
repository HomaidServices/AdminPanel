import React, { useContext, useState } from 'react'
import './Loginpage.css'
import { useNavigate } from 'react-router-dom'
import img from '../../assets/logo.webp'
import axios from 'axios';
import { AuthContext } from '../../AuthProvider';

export default function Loginpage() {
    const { isAuthenticated, login, logout } = useContext(AuthContext);
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
            // console.log(res)
            if(res[0]==='Correct'){
                console.log('Yay')
                updateStatus('')
                login([res[1].username,res[1].email])
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
