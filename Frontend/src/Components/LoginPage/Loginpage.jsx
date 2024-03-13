import React from 'react'
import './Loginpage.css'
import { useNavigate } from 'react-router-dom'
import img from '../../assets/logo.webp'
export default function Loginpage() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        document.body.style.backgroundImage='none'
        event.preventDefault()
        navigate('/main')
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
            </div>
        </div>
    )
}
