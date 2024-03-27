import React, { useState } from 'react'

export default function Filter(props) {

    const handleaction=(e)=>{
        e.preventDefault()
    }

    const handlepagechange=(e)=>{
        console.log(e.target.name)
        if(e.target.name==='prev'){
            props.setCurrentPage(page=>page-1)

        }
        else{
            props.setCurrentPage(page=>page+1)
        }
    }
    
    return (
        <div className="p-2  search-element px-5 d-flex">
            <button className="btn btn-primary me-auto" name='prev' onClick={handlepagechange} disabled={props.currentpage===0}>Prev</button>
            <form onSubmit={handleaction} className="filter-form mx-5 justify-content-between">
                <div className="options-view-filter">
                    <div className="view-select  d-flex">
                         <button type="button" class="btn ms-auto btn-primary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                            {props.view ? 'Large' : 'Small'}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a className="p-2" name='large' onClick={props.handleview}>Large</a></li>
                            <hr />
                            <li><a className="p-2" name='small' onClick={props.handleview}>Small</a></li>

                        </ul>
                    </div>

                    <div className="button-filter container-fluid">
                        <button type="button" class="btn ms-auto btn-primary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                            {props.filter}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a className="p-2" name='Name' onClick={props.handlefilter}>Name</a></li>
                            <hr />
                            {props.view && <li><a className="p-2" name='Address' onClick={props.handlefilter}>Address</a></li>}
                            {props.view && <hr />}
                            {props.view && <li><a className="p-2" name='Aadhar' onClick={props.handlefilter}>Aadhar</a></li>}
                            {props.view && <hr />}
                            <li><a className="p-2" name='Proefficient_in' onClick={props.handlefilter}>Proefficient in</a></li>
                            <hr />
                            {props.view && <li><a className="p-2" name='Experience' onClick={props.handlefilter}>Experience</a></li>}
                            {props.view && <hr />}
                            <li><a className="p-2" name='Phone_number' onClick={props.handlefilter}>Phone number</a></li>

                        </ul>
                    </div>
                </div>

                <div className="d-flex container-fluid p-0">
                    <input type="text" placeholder='search' className="search-inp" required />
                    <button className="btn btn-success mx-2" onClick={props.handlesearch}>Search</button>
                    <button className="btn btn-danger text-light mx-2" onClick={props.removefilter}>Remove </button>
                </div>
            </form>
            <button className="btn btn-primary ms-auto" name='next' onClick={handlepagechange}>Next</button>

        </div>
    )
}
