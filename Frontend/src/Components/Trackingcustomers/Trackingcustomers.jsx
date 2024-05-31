import React, { useState } from 'react';
import './Trackingcustomers.css'
import SideNavbar from '../SideNavbar/SideNavbar'

const Trackingcustomers= () => {
  const [data, setData] = useState([
    { email:'madhava@gmail.com', name: 'Madhava', phone: 9491371038, isActive: true},  
    { email:'sindhu@gmail.com', name: 'Sindhu', phone: 9491371038, isActive: false },  
    { email:'aravind@gmail.com', name: 'Aravind', phone: 9491371038, isActive: true },  
    { email:'kalyan@gmail.com', name: 'Kalyan', phone: 9491371038, isActive: false },  
  ]);

  const activeItems = data.filter(item => item.isActive);
  const inactiveItems = data.filter(item => !item.isActive);

  return (
    <>



{window.innerWidth > 560 && <SideNavbar />}
    <div className='dashboard dark2white timemanagementdiv' >        

      
      <div  className='usertable   '>
      <h1 className='dark2white'>Tracking Customers</h1>
      <hr  className='mb-5'/>
      <h2>Active Items</h2>
      <table className='col-12 time-table'>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {activeItems.map(item => (
            <tr key={item.email}>
              <td>{item.email}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Inactive Items</h2>
      <table className='col-12 time-table'>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {inactiveItems.map(item => (
            <tr key={item.email}>
              <td>{item.email}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
    </div>

    </>

  );
};

export default Trackingcustomers;

