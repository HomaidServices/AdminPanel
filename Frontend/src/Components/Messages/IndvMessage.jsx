import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import SideNavbar from '../SideNavbar/SideNavbar'
import BottomNavbar from '../BottomNavbar/BottomNavbar'
import messages from './message_list'
export default function IndvMessage() {
    const [mess_list,updMEss_list]=useState(messages.messages)
    const containerRef = useRef(null);
    const scrollToBottom = () => {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      };

    const message_list = () => {
        const ms = mess_list.map((msg, index) => {
            return (
                <>
                    <div></div>
                    {msg.sender === 'Host' && <div className='chat-message host-message ms-auto m-1 p-1'>{msg.text}</div>}

                    {msg.sender !== 'Host' && <div className='chat-message user-message me-auto m-1 p-1'>{msg.text}</div>}


                </>
            )
        })
        
        return ms
    }

const handleclick=()=>{
   const mess=String(document.querySelector('.message-add').value)
//    if(mess.trim()='')
//    return
   console.log(mess)
   document.querySelector('.message-add').value=''
   messages.addmessage({
    text: mess,
        sender: "Host",
        time: "11:00 AM",
   })
   updMEss_list((prev)=>{
    return [...prev,{text: mess,
        sender: "Host",
        time: "11:00 AM",}]
   })
   
}
useEffect(()=>{
    scrollToBottom()
},[mess_list])
    console.log(messages)
    const params = useParams().username
    return (
        <>

            {window.innerWidth > 560 && <SideNavbar />}
            <div className={`main-box  px-2   `}style={{'marginTop':'0px'}}>
                <div className="container-messages rounded-3 shadow-lg  "
                style={{'marginTop':'0px'}}>
                    <h3 className=" message-user bg-primary  text-center rounded-top mb-0 p-2">{params}</h3>
                    <div className="message_list px-2" ref={containerRef}>
                        {message_list()}
                        
                    </div>
                    <div className="input-chat  p-2 rounded-bottom">
                        <form action="" className='d-flex' onSubmit={(e)=>{e.preventDefault()}}>
                            <input className='message-add' type="text"  placeholder='type your message' />
                            <button className="btn btn-primary mx-1" onClick={handleclick}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
            {window.innerWidth < 560 && <BottomNavbar />}

        </>
    )
}
