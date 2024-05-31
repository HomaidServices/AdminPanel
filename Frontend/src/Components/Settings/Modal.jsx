import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../AuthProvider'
import { useNavigate } from 'react-router-dom'

export default function Modal({ user, login, getData }) {
    const [alert, setAlert] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    console.log(user)
    const hsave = async (e) => {
        let tosend = {}
        console.log(e.target.name)
        if (e.target.name === 'username') {
            tosend['email'] = user.email
            tosend['update'] = ['username', username]
        }
        else if (e.target.name === 'email') {
            tosend['username'] = user.username
            tosend['update'] = ['email', email]
        }
        else {
            tosend['email'] = user.email
            tosend['update'] = ['password', password]
        }
        console.log(tosend)
        await axios.post('http://localhost:3000/settings', tosend).then((result) => {
            console.log(result.data)
            localStorage.removeItem('homaid_admin_token')
            localStorage.setItem('homaid_admin_token',result.data.token)
            login([result.data.username, result.data.email])
            setAlert(['alert-success', 'Updated Successfully'])
            setUsername('')
            setEmail('')
            setPassword('')

            // getData()
            // navigate('/settings')
        }).catch((error) => {
            console.log(error)
            setAlert(['alert-danger', 'Error updating'])

        })



    }

    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            setAlert(false);
        }, 1500);
    
        return () => {
            clearTimeout(timeoutId);
        };
    },[alert])
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
                            {alert && <div class={`alert ${alert[0]} alert-dismissible fade show`} role="alert">
                                <strong>{alert[1]}</strong>
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>}
                            <div className="current-content d-flex">
                                Current username:
                                <p className="bg-secondary p-2 text-light rounded ms-auto">{user.username}</p>
                            </div>
                            <div className="change-content d-flex ">
                                New username:
                                <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} className="bg-secondary p-2 text-light ms-auto" />
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" name='username' onClick={hsave} >Save</button>
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
                            {alert && <div class={`alert ${alert[0]} alert-dismissible fade show`} role="alert">
                                <strong>{alert[1]}</strong>
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>}
                            <div className="current-content d-flex">
                                Current email:
                                <p className="bg-secondary p-2 text-light rounded ms-auto">{user.email}</p>
                            </div>
                            <div className="change-content d-flex ">
                                New email:
                                <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} className="bg-secondary p-2 text-light ms-auto" />
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" name='email' onClick={hsave}>Save</button>
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
                            {alert && <div class={`alert ${alert[0]} alert-dismissible fade show`} role="alert">
                                <strong>{alert[1]}</strong>
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>}
                            <div className="current-content d-flex">
                                Current username:
                                <p className="bg-secondary p-2 text-light rounded ms-auto">{user.username}</p>
                            </div>
                            <div className="change-content d-flex ">
                                New password:
                                <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} className="bg-secondary p-2 text-light ms-auto" />
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" name='password' onClick={hsave}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
