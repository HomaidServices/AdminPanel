import React from "react";
import SideNavbar from "../SideNavbar/SideNavbar";
import "./Bookappointment.css";
const Bookappointment = () => {
  return (
<div className="dark2white">
      {window.innerWidth > 560 && <SideNavbar />}

      <div className=" ms dashboard timemanagementdiv">
        <h3>Book Appointment</h3>
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
              <td>Aravind Nethi</td>
              <td>naravi215@gmail.com</td>
              <td>7993826205</td>
              <td>Hyderabad</td>
              <td>2024-04-21</td>
              <td>16:48</td>
              <td>Cooking</td>
              <td> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, fugiat. </td>
            </tr>

            <tr>
              <td>Madhava Reddy</td>
              <td>madhava123@gmail.com</td>
              <td>9492581053</td>
              <td>Bhimavaram</td>
              <td>2024-04-22</td>
              <td>16:48</td>
              <td>Cleaning</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cumque dolor accusamus doloribus deleniti consectetur fugit officiis veniam iste sapiente?</td>
            </tr>

            <tr>
              <td>Sai Charan</td>
              <td>charan258@gmail.com</td>
              <td>8744169875</td>
              <td>Hyderabad</td>
              <td>2024-04-23</td>
              <td>16:48</td>
              <td>Cooking</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sequi? Id illum velit commodi adipisci!</td>
            </tr>

            <tr>
              <td>P kalyan</td>
              <td>kalyan125@gmail.com</td>
              <td>7993826205</td>
              <td>Kurnool</td>
              <td>2024-04-24</td>
              <td>16:48</td>
              <td>Cleaning</td>
              <td>Hello</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>






      
    </div>
  );
};

export default Bookappointment;
