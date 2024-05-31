import React from 'react'
import SideNavbar from "../SideNavbar/SideNavbar";

const Upcomingservices = () => {
  return (
    <>
    
    <div className="dark2white">
      {window.innerWidth > 560 && <SideNavbar />}

      <div className=" ms dashboard timemanagementdiv">
        <h3>UpComing Services</h3>
        <hr />
        <div>
          <table className="col-12 time-table ">
            <thead>
            <tr>
              <th className="">Name</th>
              <th className="col-2">Email</th>
              <th>Phone Number</th>
              <th>Location</th>
              <th>Date</th>
              <th>Time</th>
              <th>Service</th>
              <th className="col-3">Message</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Madhava reddy</td>
              <td>madhav@gmail.com</td>
              <td>9491371038</td>
              <td>kondapur</td>
              <td>2024-05-29</td>
              <td>9:00</td>
              <td>Cooking</td>
              <td> Need for cooking Service </td>
            </tr>

            <tr>
              <td>Sindhu</td>
              <td>sindhu1@gmail.com</td>
              <td>9189765676</td>
              <td>Hitech city</td>
              <td>2024-05-29</td>
              <td>10:00</td>
              <td>Cleaning</td>
              <td>Need for Cleaning Serice</td>
            </tr>

            <tr>
              <td>Gowri</td>
              <td>gowri@gmail.com</td>
              <td>9873452312</td>
              <td>Madhapur</td>
              <td>2024-05-29</td>
              <td>11:00</td>
              <td>Cooking & Cleaning</td>
              <td>Need Cooking & Cleaning Service</td>
            </tr>

            <tr>
              <td>Kalyan</td>
              <td>kalyan@gmail.com</td>
              <td>9345876128</td>
              <td>Jubble Hills</td>
              <td>2024-05-29</td>
              <td>12:00</td>
              <td>Cooking & Cleaning</td>
              <td>Need Cooking & Cleaning Service</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>






      
    </div>
    
    
    </>
  )
}

export default Upcomingservices