import React, { useState } from "react";
import "./Payment-Management.css";
import SideNavbar from "../SideNavbar/SideNavbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Paymentmanagement() {
  const [inputs, setInputs] = useState({
    name: "",
    subscriptionStartDate:'',
    subscriptionEndDate:'',
    service: "",
    price: "",
    dateOfBooking: "",
    paymentStatus: "",
    receipt: "",
    feedback: "",
  });
  const [results, setResults] = useState([]);
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleAddClick = () => {
    console.log("Inputs:", inputs);
    console.log("Results:",results)
    setResults([...results, inputs]);
    setInputs({
      name: "",
      subscriptionStartDate: "",
      subscriptionEndDate:'',
      service: "",
      price: "",
      paymentStatus: "",
      receipt: "",
      feedback: "",
    });
  };



  const handleStartDateChange = (date) => {
    setInputs((prevInputs)=> ({...prevInputs,subscriptionStartDate:date}))
  };
  const handleEndDateChange = (date) => {
    setInputs((prevInputs)=> ({...prevInputs,subscriptionEndDate:date}))
  };


  

  return (
    <>
      {window.innerWidth > 560 && <SideNavbar />}
      <div className="col-10 pay  dashboard timemanagementdiv ">
        <h1 className="dark2white">Payment Management</h1>

        <button
          type="button"
          className="btn btn-primary payment-modal-btn"
          data-bs-toggle="modal"
          data-bs-target="#paymentmodel"
        >
          Add
        </button>

        <div
          className="modal fade"
          id="paymentmodel"
          tabIndex="-1"
          aria-labelledby="paymentmodelLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title" id="paymentmodelLabel">
                  Payment Management
                </h1>
                <button
                  type="button"
                  className="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex flex-wrap bookappointment">
                  <input
                    name="name"
                    value={inputs.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                  />
                  
                    <select
                      name="service"
                      value={inputs.service}
                      onChange={handleInputChange}
                    >
                      <option value="">--Please choose a service--</option>
                      <option value="Cooking">Cooking</option>
                      <option value="Cleaning">Cleaning</option>
                      <option value="Cooking and Cleaning">
                        Cooking and Cleaning
                      </option>
                    </select>
                  

                  <input
                    name="price"
                    value={inputs.price}
                    onChange={handleInputChange}
                    placeholder="Price"
                  />
                  
                  <DatePicker
                    selected={inputs.subscriptionStartDate}
                    onChange={handleStartDateChange}
                    dateFormat="MM/dd/yyyy"
                    placeholderText="Subscription Start Date"
                  />
                  <DatePicker
                    selected={inputs.subscriptionEndDate}
                    onChange={handleEndDateChange}
                    dateFormat="MM/dd/yyyy"
                    placeholderText="Subscription End Date"
                  />
                  <input
                    name="paymentStatus"
                    value={inputs.paymentStatus}
                    onChange={handleInputChange}
                    placeholder="Payment Status"
                  />
                  <input
                    name="receipt"
                    value={inputs.receipt}
                    onChange={handleInputChange}
                    placeholder="Receipt"
                  />
                  <input
                    name="feedback"
                    value={inputs.feedback}
                    onChange={handleInputChange}
                    placeholder="Feedback"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary mt-4  bg-dark"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <div className="ms-5 ps-5 ">
                  <button
                    className="bg-body-secondary rounded bookadd"
                    onClick={handleAddClick}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <h2 className="mt-5">Results</h2>
        <table className="col-12 time-table dark2white">
          <thead>
            <tr>
              <th>SL NO</th>
              <th>Name</th>
              <th>Service</th>
              <th>Price</th>
              <th>Subscription Start Date</th>
              <th>Subscription End Date</th>
              <th>Payment Status</th>
              <th>Receipt</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{result.name}</td>
                <td>{result.service}</td>
                <td>{result.price}</td>
                <td>{result.subscriptionStartDate.toLocaleDateString()}</td>
                <td>{result.subscriptionEndDate.toLocaleDateString()}</td>
                <td>{result.paymentStatus}</td>
                <td>{"UPI ID :" + result.receipt}</td>
                <td>{result.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Paymentmanagement;