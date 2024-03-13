import React from 'react'

export default function Modal(props) {
    console.log(props.username)
    return (
        <div className='main-modal'>

            {/* <button type="button" class="btn btn-primary" >
                Launch static backdrop modal
            </button> */}


            <div class="modal fade" id="changeusername" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Change username</h1>
                            
                            {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div class="modal-body p-5">
                            <div className="current-content d-flex">
                                Current username: 
                                <p className="bg-secondary p-2 text-light rounded ms-auto">{props.username}</p>
                            </div>
                            <div className="change-content d-flex ">
                                New username:
                                <input type="text" className="bg-secondary p-2 text-light ms-auto" />
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="modal fade" id="changeemail" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Change email</h1>
                            
                            {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div class="modal-body p-5">
                            <div className="current-content d-flex">
                                Current email: 
                                <p className="bg-secondary p-2 text-light rounded ms-auto">{props.email}</p>
                            </div>
                            <div className="change-content d-flex ">
                                New email:
                                <input type="text" className="bg-secondary p-2 text-light ms-auto" />
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="changepassword" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Change Password</h1>
                            
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-5">
                            <div className="current-content d-flex">
                                Current username: 
                                <p className="bg-secondary p-2 text-light rounded ms-auto">{props.username}</p>
                            </div>
                            <div className="change-content d-flex ">
                                New password:
                                <input type="password" className="bg-secondary p-2 text-light ms-auto" />
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
