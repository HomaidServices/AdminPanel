import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function BottomNavbar() {
    const loc = useLocation()
    // const navigate = useNavigate()

    return (

        <div className='bottom-navbar p-0 m-0'>
            <nav class=" bottom-navbar navbar-expand-sm navbar-dark  fixed-bottom p-0">
                <div className="nav-body p-1">
                    <ul className="nav-links mb-0">
                        <li><Link to="/main">
                            <i className={`uil fs-1 uil-estate ${loc.pathname === '/main' ? 'text-primary' : ''}`}></i>

                        </Link></li>
                        <li><Link to="/maiddetails">
                            <i className={`uil fs-1 uil-files-landscapes ${loc.pathname === '/leaderboard' ? 'text-primary' : ''}`}></i>

                        </Link></li>
                        <li><Link to="/analytics">
                            <i className={`uil fs-1 uil-chart ${loc.pathname === '/analytics' ? 'text-primary' : ''}`}></i>

                        </Link></li>
                        <li><Link to="/salesreport">
                            <i className={`uil fs-1 uil-chart ${loc.pathname === '/salesreport' ? 'text-primary' : ''}`}></i>

                        </Link></li>
                        <li><Link to="/messages">
                            <i className={`uil fs-1 uil-message ${loc.pathname === '/messages' ? 'text-primary' : ''}`}></i>

                        </Link></li>
                        <li><Link to="/settings">
                            <i className={`uil fs-1 uil-setting ${loc.pathname === '/settings' ? 'text-primary' : ''}`}></i>

                        </Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
