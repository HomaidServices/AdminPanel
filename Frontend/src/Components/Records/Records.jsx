import React, { useContext, useEffect, useState } from 'react'
import SideNavbar from '../SideNavbar/SideNavbar'
import BottomNavbar from '../BottomNavbar/BottomNavbar'
import './Records.css'
import axios from 'axios'
import { AuthContext } from '../../AuthProvider'
import { useNavigate } from 'react-router-dom'
export default function Records() {
    const [page, setPage] = useState(0)
    const [data, setData] = useState([])
    const { isAuthenticated, login, logout } = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated[0] === false)
            navigate('/')
        
    }, [isAuthenticated])
    const getData = async () => {
        axios.get(`http://localhost:3000/records/${page}`).then((response) => {
            //    const {data}=response
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const createtable = () => {
        return data.map((dt, index) => {
            return (
                <tr>
                    <th scope="row">{index}</th>
                    <td>{dt.customer_email}</td>
                    <td>{dt.Name}</td>
                    <td>{dt.type}</td>
                    <td>{dt.subtype}</td>
                    <td>{dt.Address}</td>

                </tr>
            )
        })
    }
    console.log(data)
    useEffect(() => {
        getData()

    }, [page])

    const handleclick = (e) => {
        if (e.target.name === 'previous')
            setPage(page - 1)
        else
            setPage(page + 1)
        
    }
    return (
        <>
            {window.innerWidth-214 > 560 && <SideNavbar />}
            {console.log(window.innerWidth)}
            <div className="container-records">
                <div className="main-records">
                    <h1 className="d-flex my-2">
                        <button className="btn btn-primary me-auto" name='previous' onClick={handleclick} disabled={page===0?true:false}>Previous</button>
                        <p>Records</p>
                        <button className="btn btn-primary ms-auto" name='next' onClick={handleclick}>Next</button>
                    </h1>
                    <table className="table table-striped-columns table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Maid Name</th>
                                <th scope="col">Service Type</th>
                                <th scope="col">Service Subtype</th>
                                <th scope="col">Address</th>

                            </tr>
                        </thead>
                        <tbody>
                            {createtable()}
                        </tbody>
                    </table>
                </div>
            </div>
            {window.innerWidth-214 < 560 && <BottomNavbar/>}

        </>
    )
}
