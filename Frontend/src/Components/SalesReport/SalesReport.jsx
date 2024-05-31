import React, { useContext, useEffect, useState } from 'react'
import SideNavbar from '../SideNavbar/SideNavbar'
import './SalesReport.css'
import BottomNavbar from '../BottomNavbar/BottomNavbar'
import { AuthContext } from '../../AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function SalesReport() {
    const { isAuthenticated, login, logout } = useContext(AuthContext);
    const [Cleaning, setcleaning] = useState([])
    const [Cooking, setCooking] = useState([])
    const [total, setTotal] = useState(0)
    const [email, setEmail] = useState('')
    const [empty, setEmpty] = useState({
        cleaning: false,
        cooking: false
    })

    const [status, setStatus] = useState(true)
    const fetchData = async () => {
        await axios.get(`http://localhost:3000/payment`).then((result) => {
            const [cl, cook] = result.data
            setcleaning(cl)
            setCooking(cook)
            console.log(result.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const fetchcleaning = () => {

        return Cleaning.map((val, index) => {
            return (
                <tr>
                    <td>{months[index]}</td>
                    {/* <td>{'hi'}</td> */}
                    {status && <td>{val}</td>}

                </tr>
            )
        })
    }

    const fetchcooking = () => {

        return Cooking.map((val, index) => {
            return (
                <tr>
                    <td>{months[index]}</td>
                    {/* <td>{'hi'}</td> */}
                    {status && <td>{val}</td>}

                </tr>
            )
        })
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated[0] === false)
            navigate('/')
        fetchData()

    }, [isAuthenticated])

    const handlesubmit = async (e) => {
        e.preventDefault()
        setEmpty({
            cleaning: false,
            cooking: false
        })
        await axios.post(`http://localhost:3000/payment/user-record`, { email }).then((result) => {
            console.log(result.data)
            const { total_amount_paid, cleaning_services, cooking_services } = result.data
            setStatus(false)
            setcleaning(cleaning_services)
            setCooking(cooking_services)
            setTotal(total_amount_paid)
        }).catch((error) => {
            console.log(error)
        })

    }
    // console.log(Cleaning[0])

    const fetchcleaninguser = () => {
        // console.log(Cleaning[0])
        if (Cleaning.length == 0 && !empty.cleaning)
            setEmpty((val) => { return { ...val, cleaning: true } })
        else if (Cleaning.length != 0 && empty.cleaning === true)
            setEmpty((val) => { return { ...val, cleaning: false } })


        // setEmpty((val) => { return { ...val, cleaning: false } })

        return Cleaning.map((val, index) => {
            console.log(val)
            return (
                <tr>
                    <td>{val['cleaning_service_type']}</td>
                    <td>{val['date_and_time'].split('T')[0]}</td>
                    <td>{val['date_and_time'].split('T')[1]}</td>

                    <td>{val['amount']}</td>

                </tr>
            )
        })


    }

    const fetchcookinguser = () => {
        console.log(Cleaning[0])
        if (Cooking.length == 0 && !empty.cooking)
            setEmpty((val) => { return { ...val, cooking: true } })
        else if (Cooking.length !== 0 && empty.cooking === true)
            setEmpty((val) => { return { ...val, cooking: false } })


        return Cooking.map((val, index) => {
            console.log(val)
            return (
                <tr>
                    <td>{val['date_and_time'].split('T')[0]}</td>
                    <td>{val['date_and_time'].split('T')[1]}</td>

                    <td>{val['amount']}</td>

                </tr>
            )
        })


    }

    return (
        <>
            {window.innerWidth > 560 && <SideNavbar />}

            <div className="container">
                {status && <>
                    <h1>Sales Report</h1>
                    <h3 className='mt-2'>Cleaning Services</h3>

                    <table className="table table-striped table-hover">
                        <thead>
                            <tr className='rounded'>
                                <td className='bg-primary text-light'>Month</td>
                                {/* <td className='bg-primary text-light'>Cleaning </td> */}
                                <td className='bg-primary text-light'>Revenue</td>
                            </tr>
                        </thead>
                        <tbody>
                            {fetchcleaning()}
                        </tbody>
                    </table>
                    <hr />
                    <h3 className='mt-2'>Cooking Services</h3>

                    <table className="table table-striped table-hover">
                        <thead>
                            <tr className='rounded'>
                                <td className='bg-primary text-light'>Month</td>
                                {/* <td className='bg-primary text-light'>Cooking </td> */}
                                <td className='bg-primary text-light'>Revenue</td>
                            </tr>
                        </thead>
                        <tbody>
                            {fetchcooking()}
                        </tbody>
                    </table>

                    <form onSubmit={handlesubmit}>
                        <div className="search-part">
                            <p>Enter the email that you want to search</p>
                            <input type="email" id='record-email' placeholder="enter the email " className='rounded p-1 mx-2' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <button className="btn btn-primary ms-auto">Submit</button>
                        </div>
                    </form>
                </>}

                {!status && <>
                    <div className="d-flex">
                        <button className="btn btn-primary me-5" onClick={async () => {

                            await fetchData().then(() => { setStatus(true) })
                        }}>Back</button>
                        <h2>Email: {email}</h2>
                    </div>
                    <h3>Total revenue from the customer: {total}</h3>


                    <h3 className='mt-2'>Cleaning Services</h3>

                    <table className="table table-striped table-hover">
                        <thead>
                            <tr className='rounded'>
                                <td className='bg-primary text-light'>Cleaning Service type</td>
                                <td className='bg-primary text-light'>Date  </td>
                                <td className='bg-primary text-light'>Time </td>

                                <td className='bg-primary text-light'>Amount</td>
                            </tr>
                        </thead>
                        <tbody>

                            {fetchcleaninguser()}
                        </tbody>
                    </table>
                    {empty.cleaning === true && <div className='d-flex justify-content-center'>No records available</div>}
                    <hr />
                    <h3 className='mt-2'>Cooking Services</h3>

                    <table className="table table-striped table-hover">
                        <thead>
                            <tr className='rounded'>
                                <td className='bg-primary text-light'>Date  </td>
                                <td className='bg-primary text-light'>Time </td>

                                <td className='bg-primary text-light'>Amount</td>
                            </tr>
                        </thead>
                        <tbody>

                            {fetchcookinguser()}
                        </tbody>
                    </table>
                    {empty.cooking === true && <div className='d-flex justify-content-center'>No records available</div>}

                    <hr />
                    <form onSubmit={handlesubmit}>
                        <div className="search-part">
                            <p>Enter the email that you want to search</p>
                            <input type="email" id='record-email' placeholder="enter the email " className='rounded p-1 mx-2' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <button className="btn btn-primary ms-auto">Submit</button>
                        </div>
                    </form>
                </>}
            </div>
            {window.innerWidth < 560 && <BottomNavbar />}

        </>
    )
}
