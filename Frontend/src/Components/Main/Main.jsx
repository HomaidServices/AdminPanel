import React from 'react'
import { Link } from 'react-router-dom'
import SideNavbar from '../SideNavbar/SideNavbar'
import './Main.css'
import BottomNavbar from '../BottomNavbar/BottomNavbar'
export default function Main() {
    const handlecollapse = () => {
        document.body.classList.toggle('close')
    }

    return (
        <div>
            {window.innerWidth > 560 && <SideNavbar />}

            <section className={`dashboard `} >

                <div className="dash-content  " >
                    <div className="overview">
                        <div className="top-part fixed mb-2  ">
                            <div className="title me-auto">
                                <i className="uil uil-tachometer-fast-alt"></i>
                                <span className="text">Dashboard</span>
                            </div>
                            {<div className="search-box pt-4 me-0  d-flex align-items-center justify-content-end ms-auto ps-5 my-3">
                                <i className="uil uil-search mx-2 "></i>
                                <input type="text" placeholder="Search here..." />
                            </div>}
                        </div>

                        <div className="boxes">
                            <div className="box box1">
                                <i className="uil uil-thumbs-up"></i>
                                <span className="text">Total Customers</span>
                                <span className="number">10</span>
                            </div>
                            <div className="box box2">
                                <i className="uil uil-comments"></i>
                                <span className="text">Total Revenue</span>
                                <span className="number">5500</span>
                            </div>
                            <div className="box box3">
                                <i className="uil uil-share"></i>
                                <span className="text">Total Orders</span>
                                <span className="number">15</span>
                            </div>
                        </div>
                    </div>

                    <div className="activity">
                        <div className="title">
                            <i className="uil uil-clock-three"></i>
                            <span className="text">Recent Activity</span>
                        </div>
                        <hr />
                        <div className="activity-data">
                            <div className="data names">
                                <span className="data-title">Name</span>
                                <span className="data-list">Prem Shahi</span>
                                <span className="data-list">Deepa Chand</span>
                                <span className="data-list">Manisha Chand</span>
                                <span className="data-list">Pratima Shahi</span>
                                <span className="data-list">Man Shahi</span>
                                <span className="data-list">Ganesh Chand</span>
                                <span className="data-list">Bikash Chand</span>
                            </div>
                            <div className="data email">
                                <span className="data-title">Email</span>
                                <span className="data-list">premshahi@gmail.com</span>
                                <span className="data-list">deepachand@gmail.com</span>
                                <span className="data-list">prakashhai@gmail.com</span>
                                <span className="data-list">manishachand@gmail.com</span>
                                <span className="data-list">pratimashhai@gmail.com</span>
                                <span className="data-list">manshahi@gmail.com</span>
                                <span className="data-list">ganeshchand@gmail.com</span>
                            </div>
                            <div className="data joined">
                                <span className="data-title">Joined</span>
                                <span className="data-list">2022-02-12</span>
                                <span className="data-list">2022-02-12</span>
                                <span className="data-list">2022-02-13</span>
                                <span className="data-list">2022-02-13</span>
                                <span className="data-list">2022-02-14</span>
                                <span className="data-list">2022-02-14</span>
                                <span className="data-list">2022-02-15</span>
                            </div>
                            <div className="data type">
                                <span className="data-title">Type</span>
                                <span className="data-list">New</span>
                                <span className="data-list">Member</span>
                                <span className="data-list">Member</span>
                                <span className="data-list">New</span>
                                <span className="data-list">Member</span>
                                <span className="data-list">New</span>
                                <span className="data-list">Member</span>
                            </div>
                            <div className="data status">
                                <span className="data-title">Status</span>
                                <span className="data-list">Liked</span>
                                <span className="data-list">Liked</span>
                                <span className="data-list">Liked</span>
                                <span className="data-list">Liked</span>
                                <span className="data-list">Liked</span>
                                <span className="data-list">Liked</span>
                                <span className="data-list">Liked</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {window.innerWidth < 560 && <BottomNavbar />}
        </div>
    )
}
