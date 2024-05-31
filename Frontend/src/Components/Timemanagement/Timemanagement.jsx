import React, { useState } from "react";
import "./Timemanagement.css";
import SideNavbar from "../SideNavbar/SideNavbar";

function Timemanagement() {
  const [inputs, setInputs] = useState({
    name: "",
    starttime: "",
    workinglocation: "",
    endtime: "",
    totalhours: "",
    Description: "",
  });
  const [selectedInputs, setSelectedInputs] = useState([]);
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleAddClick = () => {
    // Calculate total hours
    const start = new Date(`01/01/2020 ${inputs.starttime}`);
    const end = new Date(`01/01/2020 ${inputs.endtime}`);
    const diffInMs = end - start;
    const totalHours = (diffInMs / (1000 * 60 * 60)).toFixed(2);

    // Create new entry with total hours
    const selected = { ...inputs, totalhours: totalHours };

    // Update state
    setSelectedInputs(selected);
    setResults([...results, selected]);
    setInputs({
      name: "",
      starttime: "",
      workinglocation: "",
      endtime: "",
      totalhours: "",
      Description: "",
    });
  };

  return (
    <>
      {window.innerWidth > 560 && <SideNavbar />}

      <div className="col-10 pt-5 timemanagementdiv dashboard dark2white">
        <h1 className="dark2white">Time Management</h1>

        <div>
          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Maid
          </button>

          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Maid Details</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className=" d-flex flex-wrap   timemanagement">
                  {/* <input
                    className="form-control mt-3 "
                    name="name"
                    value={inputs.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                  /> */}
<div className="col-10 ms-5">
                  <select
                  className=" form-control"
                    name="name"
                    value={inputs.name}
                    onChange={handleInputChange}
                  >
                    <option value="">--Please choose a Maid--</option>
                    <option value="Anand">Anand</option>
                    <option value="Balu">Balu</option>
                    <option value="Kalyan">Kalyan</option>
                  </select>
                  </div>
                  <input
                    className="form-control mt-3 "
                    name="workinglocation"
                    value={inputs.workinglocation}
                    onChange={handleInputChange}
                    placeholder="Working Location"
                  />

                  <div className=" time-input ">
                    <div>
                      <p className="p-0 m-0 mt-4 ms-5">Start time</p>
                      <input
                        className="form-control  "
                        name="starttime"
                        value={inputs.starttime}
                        onChange={handleInputChange}
                        type="time"
                      />
                    </div>
                    <div>
                      <p className="p-0 m-0 mt-4 fs-6 ms-5">End time</p>
                      <input
                        className="form-control  "
                        name="endtime"
                        value={inputs.endtime}
                        onChange={handleInputChange}
                        type="time"
                      />
                    </div>
                  </div>
                  <textarea
                    name="Description"
                    className="description col-10 ms-5 "
                    value={inputs.Description}
                    onChange={handleInputChange}
                    placeholder="Description"
                  />
                </div>{" "}
                <div class="modal-body"></div>
                <div class="modal-footer">
                  <div>
                    <button
                      className=" bg-body-secondary rounded bookbutton"
                      onClick={handleAddClick}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <h2 className="mt-5">Results</h2>
        <table className="col-12 time-table position-relative">
          <thead>
            <tr>
              <th>SL NO</th>
              <th>Date</th>
              <th>Name of the Maid</th>
              <th>Working Location</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Total Hours</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{new Date().toDateString()}</td>
                <td>{result.name}</td>
                <td>{result.workinglocation}</td>
                <td>{result.starttime}</td>
                <td>{result.endtime}</td>
                <td>{result.totalhours}</td>
                <td>{result.Description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="totalmaid">Total maids : 100</p>
      </div>
    </>
  );
}

export default Timemanagement;
