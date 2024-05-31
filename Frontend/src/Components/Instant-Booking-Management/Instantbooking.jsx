import React, { useState } from "react";
import "./Instantbooking.css";
import SideNavbar from "../SideNavbar/SideNavbar";

function Instantbooking() {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [displayedInputs, setDisplayedInputs] = useState([]);

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    // For demonstration, let's simulate payment status randomly
    const paymentStatus = Math.random() < 0.5 ? "Pending" : "Completed";
    setDisplayedInputs([
      ...displayedInputs,
      { email, description, paymentStatus },
    ]);
    setEmail("");
    setDescription("");
  };

  return (
    <>
      {window.innerWidth > 560 && <SideNavbar />}
      <div className="instant-booking dark2white dashboard timemanagementdiv">
        <h2 className="mt-5 pt-4 ">Instant Booking Management</h2>
    
        <div className="d-flex justify-content-center">
          <div className="col-8 ">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
              placeholder="Enter Email"
            />
            <textarea
              className="instant-booking-description"
              type="text"
              value={description}
              onChange={(e) => handleInputChange(e, setDescription)}
              placeholder="Enter Description"
            />
          </div>
        </div>
        <button className="instant-submit" onClick={handleSubmit}>
          Submit
        </button>

        <hr className="col-9 mx-auto"/>

        <div className="mt-5 ms-5">
          {displayedInputs.map((inputs, index) => (
            <div key={index}>
              <p>Email: {inputs.email}</p>
              <p>Description: {inputs.description}</p>
              <p>Payment: {inputs.paymentStatus}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Instantbooking;
