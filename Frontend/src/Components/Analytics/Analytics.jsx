import React, { useEffect } from 'react'
import './Analytics.css'
import SideNavbar from '../SideNavbar/SideNavbar'
import BottomNavbar from '../BottomNavbar/BottomNavbar';
import imported_charts from './Charts';

export default function Analytics() {
    
    const handleclick = (e) => {
        // console.log(e.target.name)
        const clas = e.target.className.split(' ')[0]
        imported_charts.Change_chart(e.target.name, clas)
    }

    useEffect(() => {

        imported_charts.Charts()
        imported_charts.targetChart()
    }, [])


    return (
        <>
            {window.innerWidth < 1000 ? alert('This is better visible in Desktop mode') : ''}
            {window.innerWidth > 560 && <SideNavbar />}

            <div className="container-analysis overflow-auto rounded-top">
                <h1 className="text-center bg-success rounded-top ">Analytics</h1>
                <div className="main-chart-container  p-3">
                    <h3 className="text-center ">Total Sales
                        <div className="chart-buttons ms-auto">
                            <button name='TotalSales' className="pie btn p-1 btn-primary " onClick={handleclick}>Pie</button>
                            <button name='TotalSales' className="bar btn btn-primary mx-2 " onClick={handleclick}>Bar</button>
                            <button name='TotalSales' className="line btn btn-primary mx-2 " onClick={handleclick}>Line</button>


                        </div>
                    </h3>

                    {/* <!-- Display charts and data here --> */}
                    <div className="chart-container my-2">
                        <canvas id="TotalSales"  >

                        </canvas>
                    </div>
                    <hr />


                    <h3 className="text-center ">Cooking Sales
                        <div className="chart-buttons ms-auto">
                            <button name='CookingData' className="pie btn p-1 btn-primary " onClick={handleclick}>Pie</button>
                            <button name='CookingData' className="bar btn btn-primary mx-2 " onClick={handleclick}>Bar</button>
                            <button name='CookingData' className="line btn btn-primary mx-2 " onClick={handleclick}>Line</button>


                        </div>
                    </h3>

                    <div className="chart-container my-3">
                        <canvas id="CookingData"  >

                        </canvas>
                    </div>

                    <hr />
                    <h3 className="text-center ">
                        Cleaning Sales
                        <div className="chart-buttons ms-auto">
                            <button name='CleaningData' className="pie btn p-1 btn-primary " onClick={handleclick}>Pie</button>
                            <button name='CleaningData' className="bar btn btn-primary mx-2 px-1" onClick={handleclick}>Bar</button>
                            <button name='CleaningData' className="line btn btn-primary mx-2 " onClick={handleclick}>Line</button>


                        </div>
                    </h3>

                    <div className="chart-container my-3 ">
                        <canvas id="CleaningData"  >

                        </canvas>

                    </div>

                    <hr />

                    <h3 className="text-center d-flex justify-content-center my-2 pt-3">
                        Current Week Sales
                    </h3>

                    <div className="chart-container my-3 ">
                        <canvas id="TargetData"  >

                        </canvas>

                    </div>


                </div>






            </div>
            {window.innerWidth < 560 && <BottomNavbar />}

        </>
    )
}
