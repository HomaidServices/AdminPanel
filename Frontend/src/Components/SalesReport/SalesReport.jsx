import React, { useContext } from 'react'
import SideNavbar from '../SideNavbar/SideNavbar'
import './SalesReport.css'
import BottomNavbar from '../BottomNavbar/BottomNavbar'
import { AuthContext } from '../../AuthProvider';
import { useNavigate } from 'react-router-dom';
export default function SalesReport() {
    const { isAuthenticated, login, logout } = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated[0] === false)
            navigate('/')
        
    }, [isAuthenticated])
    return (
        <>
            {window.innerWidth > 560 && <SideNavbar />}

            <div className="container">
                <h1>Sales Report</h1>

                <table id="salesTable">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price per Unit</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- Sales data will be dynamically added here using JavaScript --> */}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="4" className="total-label">Total Sales</td>
                            <td id="totalSales">0</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            {window.innerWidth < 560 && <BottomNavbar/>}

        </>
    )
}
