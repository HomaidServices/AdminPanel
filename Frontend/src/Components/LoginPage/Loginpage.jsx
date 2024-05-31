import React, { useContext, useState } from 'react';
import './Loginpage.css';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/logo.webp';
import Cookies from 'js-cookie';
import { AuthContext } from '../../AuthProvider';

export default function Loginpage() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [status, updateStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const user = {
            username: username,
            password: password
        };

        try {
            const response = await fetch('https://api.homaid.in/admin_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            const data = await response.json();

            if (response.ok) {
                Cookies.set('homaid_admin_token', data.jwtToken, { expires: 7 }); // Set expiration for 7 days
                login([data.username, data.email]);
                navigate('/main');
            } else {
                updateStatus(data.display_msg);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="outer">
        <div className="container">
            <div className='logo-con'>
                <div>
                <img src={img} alt="error" className="admin-logo" />
                </div>
            <div className='content-con'>
                <h2>Homaid Services</h2>
                <h2>Admin Panel</h2>
            </div>   
            </div>
            <form id="signInForm" method="post" onSubmit={handleSubmit}>
                <div className='input-con'>
                    <label htmlFor='username'>Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" required />
                </div>
                <div className='input-con'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" required />
                </div>
                
                <input type="submit" value="Sign In" />
                
            </form>
            <div className="my-2 text-center text-danger">{status}</div>
        </div>
    </div>
    );
}
