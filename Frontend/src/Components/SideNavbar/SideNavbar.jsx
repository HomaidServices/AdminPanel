import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import "./Sidebar.css";

export default function SideNavbar() {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  const navigate = useNavigate();
  const [mode, alterMode] = useState(
    document.body.classList.contains("dark") ? true : false
  );
  const [closed, alterClosed] = useState(
    document.body.classList.contains("closed") ? true : false
  );
  const handlemode = () => {
    alterMode((mode) => !mode);
    document.body.classList.toggle("dark");
  };
  const handlelogout = () => {
    logout();
    localStorage.removeItem("homaid_admin_token");
    navigate("/");
    // url("src/assets/30.webp");
  };
  const loc = useLocation();
  console.log(loc);

  const handleclose = () => {
    alterClosed((closed) => !closed);
    document.body.classList.toggle("closed");
  };

  return (
    // <div>
    <nav className={`${closed ? "close" : ""} ${mode ? "dark" : ""}`}>
      <div className="logo-name px-1">
        <button
          className={`btn btn-lg text-${
            mode ? "light" : "secondary"
          } uil uil-bars px-2 `}
          onClick={handleclose}
          style={{ width: "50px" }}
        ></button>
        <div className="logo-image">
          <img src="src/assets/logo.webp" alt="" />
        </div>

        <span className="logo_name">HOMAID</span>
      </div>

      <div className="menu-items ms-0 text-red scroll  ">
        <ul className="nav-links">
          <li>
            <Link to="/main">
              <i
                className={`uil uil-estate ${
                  loc.pathname === "/main" ? "text-primary" : ""
                }`}
              ></i>
              <span
                className={`link-name ${
                  loc.pathname === "/main" ? "text-primary" : ""
                }`}
              >
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link to="/maiddetails">
              <i
                className={`uil uil-files-landscapes ${
                  loc.pathname === "/maiddetails" ? "text-primary" : ""
                }`}
              ></i>
              <span
                className={`link-name ${
                  loc.pathname === "/maiddetails" ? "text-primary" : ""
                }`}
              >
                Maid Details
              </span>
            </Link>
          </li>
          <li>
            <Link to="/analytics">
              <i
                className={`uil uil-chart ${
                  loc.pathname === "/analytics" ? "text-primary" : ""
                }`}
              ></i>
              <span
                className={`link-name ${
                  loc.pathname === "/analytics" ? "text-primary" : ""
                }`}
              >
                Analytics
              </span>
            </Link>
          </li>

          <li>
            <Link to="/book-appointment">
              <i
                className={`uil uil-calender ${
                  loc.pathname === "/book-appointment" ? "text-primary" : ""
                }`}
              ></i>
              <span
                className={`link-name ${
                  loc.pathname === "/book-appointment" ? "text-primary" : ""
                }`}
              >
                Book Appointment
              </span>
            </Link>
          </li>

          {/* <li className='mt-2 mb-2'><Link to="/instant-booking-management">
                            <i className={`uil uil-chat ${loc.pathname==='/instant-booking-management'?'text-primary':''}`}></i>
                            <span className={`link-name ${loc.pathname==='/instant-booking-management'?'text-primary':''}`}>Instant Booking Management</span>
                        </Link></li> */}

          <li className="mt-3 mb-2">
            <Link to="/timemanagement">
              <i
                className={`uil uil-home ${
                  loc.pathname === "/timemanagement" ? "text-primary" : ""
                }`}
              ></i>
              <span
                className={`link-name ${
                  loc.pathname === "/timemanagement" ? "text-primary" : ""
                }`}
              >
                Time Management
              </span>
            </Link>
          </li>

          <li className="d-flex align-items-center">
            <i
              className={`uil uil-credit-card ${
                loc.pathname === "" ? "text-primary" : ""
              }`}
            ></i>
            <span
              className={`link-name ${
                loc.pathname === "" ? "text-primary" : ""
              }`}
            >
              <div class="dropdown">
                <button
                  data-mdb-button-init
                  data-mdb-ripple-init
                  data-mdb-dropdown-init
                  class="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Booking Services
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <Link to="/upcoming-services">
                      <a class="dropdown-item">Upcoming Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/upcoming-services">
                      <a class="dropdown-item">Ongoing Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/upcoming-services">
                      <a class="dropdown-item">Completed Services</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </span>
          </li>

          <li>
            <Link to="/trackingcustomers">
              <i
                className={`uil uil-location-point ${
                  loc.pathname === "/trackingcustomers" ? "text-primary" : ""
                }`}
              ></i>
              <span
                className={`link-name ${
                  loc.pathname === "/trackingcustomers" ? "text-primary" : ""
                }`}
              >
                Tracking Customers
              </span>
            </Link>
          </li>

          <li className="mt-3 mb-2">
            <Link to="/payment-management">
              <i
                className={`uil uil-money-withdrawal ${
                  loc.pathname === "/settings" ? "text-primary" : ""
                }`}
              ></i>
              <span
                className={`link-name ${
                  loc.pathname === "/settings" ? "text-primary" : ""
                }`}
              >
                Payment Management
              </span>
            </Link>
          </li>

          <li>
            <Link to="/customer-management">
              <i
                className={`uil uil-graph-bar ${
                  loc.pathname === "/customer-management" ? "text-primary" : ""
                }`}
              ></i>
              <span
                className={`link-name ${
                  loc.pathname === "/customer-management" ? "text-primary" : ""
                }`}
              >
                Customer Management
              </span>
            </Link>
          </li>

          <li>
            <Link to="/salesreport">
              <i
                className={`uil uil-graph-bar ${
                  loc.pathname === "/salesreport" ? "text-primary" : ""
                }`}
              ></i>
              <span
                className={`link-name ${
                  loc.pathname === "/salesreport" ? "text-primary" : ""
                }`}
              >
                Sales Report
              </span>
            </Link>
          </li>
          <li>
            <Link to="/records">
              <i
                className={`uil uil-chart ${
                  loc.pathname === "/records" ? "text-primary" : ""
                }`}
              ></i>
              <span
                className={`link-name ${
                  loc.pathname === "/records" ? "text-primary" : ""
                }`}
              >
                Records
              </span>
            </Link>
          </li>
          <li>
            <Link to="/messages">
              <i
                className={`uil uil-message ${
                  loc.pathname === "/messages" ? "text-primary" : ""
                }`}
              ></i>
              <span
                className={`link-name ${
                  loc.pathname === "/messages" ? "text-primary" : ""
                }`}
              >
                Messages
              </span>
            </Link>
          </li>

          <li>
            <Link to="/settings">
              <i
                className={`uil uil-setting ${
                  loc.pathname === "/settings" ? "text-primary" : ""
                }`}
              ></i>
              <span
                className={`link-name ${
                  loc.pathname === "/settings" ? "text-primary" : ""
                }`}
              >
                Settings
              </span>
            </Link>
          </li>
        </ul>
        <hr className="dark ms-1 my-2 " />
        <ul className="logout-mode p-0 py-3">
          <li>
            <a href="">
              <button
                className={`btn btn-lg text-${
                  mode ? "light" : "secondary"
                } d-flex p-0 `}
                style={{ background: "transparent", border: "none" }}
                onClick={handlelogout}
              >
                <i className="uil uil-signout"></i>
                <span className="link-name">Logout</span>
              </button>
            </a>
          </li>

          <li className="mode" onClick={handlemode}>
            <Link to="#">
              <i className={`uil uil-${mode ? "sun" : "moon"} t`}></i>
              <span className="link-name">Dark Mode</span>
            </Link>

            {/* <div className="mode-toggle">
                                <span className="switch"></span>
                            </div> */}
            <div class=" mx-2 form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                checked={mode}
              />
            </div>
          </li>
        </ul>
      </div>
    </nav>
    // </div>
  );
}
