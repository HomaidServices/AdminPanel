import React, { useState } from 'react'
import SideNavbar from '../SideNavbar/SideNavbar'
import './MaidDetails.css'
import Filter from './Filter'
import img from '../../assets/logo.webp'
import BottomNavbar from '../BottomNavbar/BottomNavbar'
export default function MaidDetails() {
    const [view, changeView] = useState(true)
    const handleview = (e) => {
        if (e.target.name == 'large')
            changeView(true)
        else
            changeView(false)
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

        let trows = main_set.map((row, index) => {
            return (
                <tr >
                    
                    {view && <td scope="row">{index + 1}</td>}
                    <td><img src={img} height={50} width={50} alt="Loading" /></td>
                    <td>{row.names}</td>
                    <td>{row.phone}</td>
                    {view && <td>{row.address }</td>}
                    {view && <td>{row.aadhar}</td>}
                    {view && <td>{row.Experience}</td>}
                    <td>{row.Type}</td>
                </tr>
            )
        })
        return trows
    }

    return (
        <>
            {generate()}
            {window.innerWidth > 560 && <SideNavbar />}
            <div className="container-table p-0 ">
                <h1 className=" mx-2 mt-0 text-center">Maid Details</h1>
                <Filter view={view} handleview={handleview} />
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
