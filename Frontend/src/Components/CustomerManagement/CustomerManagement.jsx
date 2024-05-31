import React, { useState } from 'react';
import "./CustomerManagement.css"
import SideNavbar from "../SideNavbar/SideNavbar";

const CustomerManagement = () => {

    const [users, setUsers] = useState([
        { id: 1, name: 'Madhava', email: 'madhava@gmail.com'},
        { id: 2, name: 'Sindhu', email: 'sindhu@gmail.com'},
        { id: 3, name: 'Kalyan', email: 'kalyan@gmail.com'}
    ]);

    const handleOrderClick = (userId) => {
        console.log({userId});
    };

    const handlePreferenceClick = (userId) => {
        console.log({userId});
    };

    const handleInteractionClick = (userId) => {
        console.log({userId});
    };
    return (
        <>
            {window.innerWidth > 560 && <SideNavbar />}

            <div className='dashboard overflow-y-scroll'>
                <h1>Customer Management</h1>
                <div>
                    
                    <table className='col-12'>
                        <thead>
                            <tr>
                                <th className='col-1'>User ID</th>
                                <th className='col-2'>Name</th>
                                <th className='col-3'>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className='ms-2' onClick={() => handleOrderClick(user.id)}>Manage Orders</button>
                                        <button className='ms-2' onClick={() => handlePreferenceClick(user.id)}>Manage Preferences</button>
                                        <button className='ms-2' onClick={() => handleInteractionClick(user.id)}>View Interactions</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}


export default CustomerManagement
