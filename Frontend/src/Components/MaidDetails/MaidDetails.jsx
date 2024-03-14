import React, { useEffect, useState } from 'react'
import SideNavbar from '../SideNavbar/SideNavbar'
import './MaidDetails.css'
import Filter from './Filter'
import img from '../../assets/logo.webp'
import BottomNavbar from '../BottomNavbar/BottomNavbar'
import axios from 'axios'
export default function MaidDetails() {
    const [view, changeView] = useState(true)
    const [maiddetails, SetMaidDetails] = useState([])
    const handleview = (e) => {
        if (e.target.name == 'large')
            changeView(true)
        else
            changeView(false)
    }
    const [filter, setFilter] = useState('Filter')
    const handlefilter = (e) => {
        console.log(e.target.name)
        setFilter(e.target.name)
    }

    const handlesearch = async () => {
        let val = document.querySelector('.search-inp').value
        if (filter === 'Experience')
            val = parseInt(val)
        console.log({ [filter]: val })
        await axios.post('http://localhost:3000/maiddetails', { [filter]: val }).then((response) => {
            SetMaidDetails(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const removefilter = () => {
        getdata()
    }

    console.log(img)
    const list = {
        'names': ['Savitri', 'Priyanka', 'Namesha', 'Lorraine', 'Chandni'],
        'phone': ['7985641585', '79856546515'],
        'address': ['Hyderabad', 'Vizag', 'Vijaywada', 'Kurnool', 'Nellore'],
        'aadhar': ['785589441242'],
        'Experience': ['1', '2', '1', '5', '6'],
        'Type': ['Cooking', 'Cleaning'],
        'photo': ['loading']
    }
    const col_list = ['names', 'phone', 'address', 'aadhar', 'Experience', 'Type', 'photo']
    let main_set = [], indvobj = {}

    const generate = () => {
        let ind;
        for (let j = 1; j <= 20; j++) {

            for (let i = 0; i < 7; i++) {
                let col = col_list[i]
                let seed = new Date().getTime(); // Use current timestamp as the seed
                let randomGenerator = new Math.seedrandom(seed);

                ind = Math.floor(randomGenerator() * list[col].length)

                let val = list[col][ind]
                indvobj[col] = val
            }
            main_set.push(indvobj)
        }
        //    return main_set;
    }

    const create_table = () => {

        let trows = maiddetails.map((row, index) => {
            return (
                <tr >

                    {view && <td scope="row">{index + 1}</td>}
                    <td><img src={img} height={50} width={50} alt="Loading" /></td>
                    <td>{row['Name']}</td>
                    <td>{row['Phone_number']}</td>
                    {view && <td>{row['Address']}</td>}
                    {view && <td>{row['Aadhar']}</td>}
                    {view && <td>{row['Experience']}</td>}
                    <td>{row['Proefficient_in']}</td>
                </tr>
            )
        })
        return trows
    }
    const getdata = async () => {
        await axios.get('http://localhost:3000/maiddetails').then((response) => {
            console.log(response.data)
            SetMaidDetails(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        getdata()
    }, [])

    return (
        <>
            {generate()}
            {window.innerWidth > 560 && <SideNavbar />}
            <div className="container-table p-0 ">
                <h1 className=" mx-2 mt-0 text-center">Maid Details</h1>
                <Filter view={view} handleview={handleview} filter={filter} handlefilter={handlefilter} handlesearch={handlesearch} removefilter={removefilter} />
                <div className="maid-table shadow rounded overflow-auto ">


                    <table class="table table-striped-columns table-hover table-bordered ">
                        <thead className='table-dark '>
                            <tr>
                                {view && <th scope="col">Sl. No.</th>}
                                <th scope="col">Photo</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone number</th>
                                {view && <th className='address' scope="col">Address</th>}
                                {view && <th scope="col">Aadhar</th>}
                                {view && <th scope="col">Experience</th>}
                                <th scope="col">Proefficient in</th>

                            </tr>
                        </thead>
                        <tbody>

                            {create_table()}
                        </tbody>
                    </table>
                </div>

            </div>
            {window.innerWidth < 560 && <BottomNavbar />}


        </>
    )
}
