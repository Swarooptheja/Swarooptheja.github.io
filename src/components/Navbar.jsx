import React, { useState } from 'react';
import "./Navbar.css"
import{AiOutlineHome,AiOutlineUser} from "react-icons/ai"
import{BiBook} from "react-icons/bi"
import{RiServiceFill,RiMessage2Fill} from "react-icons/ri"
import{GrContact} from "react-icons/gr"
import {HiDownload} from "react-icons/hi"
import {GiHamburgerMenu} from "react-icons/gi"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react';
import {SiAppannie} from "react-icons/si"
function Navbar(props) {
    let [activenav,setactivenav]=useState("#")

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
      <div id='navbarmain'>
        <div>
          <GiHamburgerMenu  color='white'     size={40} ref={btnRef}  onClick={onOpen}   />
          <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
         
          <DrawerBody>
          <Button variant='outline' mr={6} width={150}  onClick={onClose} >
              <a style={{textDecoration:"none"}} href="#">Home</a>
            </Button>
            <Button my={10} variant='outline' mr={6} width={150} onClick={onClose} >
            <a style={{textDecoration:"none"}} href="#aboutme">About Me</a>
            </Button>
            <Button  variant='outline' mr={6} width={150} onClick={onClose}>
            <a style={{textDecoration:"none"}} href="#myskillsmain">My Skills</a>
            </Button>
            <Button my={10} variant='outline' mr={6} width={150} onClick={onClose}>
            <a style={{textDecoration:"none"}} href="#myprojects">My Projects</a>
            </Button>
            <Button  variant='outline' mr={6} width={150} onClick={onClose}>
            <a style={{textDecoration:"none"}} href="#myprojects">My Statistics</a>
            </Button>
            <Button my={10} variant='outline' mr={6} width={150} onClick={onClose}>
            <a style={{textDecoration:"none"}} href="#contact">Let's Get In Touch</a>
            </Button>

            <Button color="white" bg="blue" mr={6} width={250} onClick={onClose}>
            <a style={{textDecoration:"none"}} href="https://drive.google.com/file/d/1NDlDVTUhEjf4quPFjS6bshmHNXHNkq0d/view?usp=sharing" download="Thejaswaroop.pdf" className='btnnavbar'>
          <h3>Download Resume</h3>
          </a>
            </Button>

          </DrawerBody>

          
        </DrawerContent>
      </Drawer>
        
        </div>
        <div>
          <SiAppannie size={50} color="white"/>
        </div>
        <div>
        <button id='downloadbtn'>
        <a style={{textDecoration:"none"}} href="https://drive.google.com/file/d/1NDlDVTUhEjf4quPFjS6bshmHNXHNkq0d/view?usp=sharing" download="Thejaswaroop.pdf" className='btnnavbar'>
          <h3>Download Resume
            <HiDownload size={22} color="white"/>
          </h3>
        </a>
          
          </button>
        </div>
      </div>
    );
}

export default Navbar;