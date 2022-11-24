import React, { useRef, useState } from 'react';
import './Getintouch.css';
import { Button, FormErrorMessage, FormHelperText, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react'
import { AiOutlineMail, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import {FaTelegramPlane} from "react-icons/fa";
import emailjs from "emailjs-com"
function Getintouch(props) {

    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = input === ''

    const form = useRef();
        const sendEmail = (e) => {
            e.preventDefault();
            console.log(e)
        
            emailjs.sendForm('service_vcvwqhr', 'template_8ce9x8f', form.current, 'WcfXvZ8DA3_-bAzWO')
              e.target.reset()
          };
    return (
        <div id='contact'>
            <h1 id='headinggetintouch'>Let's Get In Touch</h1>

            <div id='getintouchmain'style={{ backgroundImage: 
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpV82ZC57pGLPYoVDIpMVGWZHcMosHYvFyQr27yBEi7Kr5UMwmsg03_844uDsHKteLjKc&usqp=zzzzzzzzz')",
                  }}  >
              <div id='getintouchmessages'>

              <div className='contact_option'>
                        <AiOutlineMail size={30} className='contact_option-icon'/>
                        <h2>Email</h2>
                        {/* <h3>swarooptheja809@gmail.com</h3> */}
                        <a  style={{textDecoration:"none"}} href="mailto:swarooptheja809@gmail.com" target="_blank"> Send Message</a>
                        

                    </div>
                    <div className='contact_option'>
                        <AiFillLinkedin size={50}  className='contact_option-icon'/>
                        <h2>Linkdin</h2>
                        {/* <h3>Theja Swaroop</h3> */}
                        <a  style={{textDecoration:"none"}} target="_blank" href="https://www.linkedin.com/in/theja-swaroop-10a1a9197/"> Send Message</a>
                        

                    </div>
                    <div className='contact_option'>
                        <AiOutlineWhatsApp size={50}  className='contact_option-icon'/>
                        <h2>WhatsApp</h2>
                        {/* <h3>7095453630</h3> */}
                        <a  style={{textDecoration:"none"}} target="_blank" href="https://api.whatapp.com/send?phone=+917095453630"> Send Message</a>
                        

                    </div>

              </div>
              <div id='formofinput' >
              <form ref={form} onSubmit={sendEmail} >
                    <input type="text"  name="name" placeholder='Your full Name' required/><br/>
                    <input type="email" name='email' placeholder='Your Email Here' required /><br/>
                    <textarea name="message" id="formtextarea" rows="7" placeholder='Your Message' required></textarea><br/>
                    <button type='submit' className='btn btn-primary'>Send Message
                    <FaTelegramPlane size={20} />
                    </button>
                </form> 
              </div>
            </div>
        </div>
    );
}

export default Getintouch;