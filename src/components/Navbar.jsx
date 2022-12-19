// import React, { useState } from 'react';
// import "./Navbar.css"
// import{AiOutlineHome,AiOutlineUser} from "react-icons/ai"
// import{BiBook} from "react-icons/bi"
// import{RiServiceFill,RiMessage2Fill} from "react-icons/ri"
// import{GrContact} from "react-icons/gr"
// import {HiDownload} from "react-icons/hi"
// import {GiHamburgerMenu} from "react-icons/gi"
// import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react';
// import {SiAppannie} from "react-icons/si"
// function Navbar(props) {
//     let [activenav,setactivenav]=useState("#")

//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const btnRef = React.useRef()
//     return (
//       <div id='navbarmain'>
//         <div>
//           <GiHamburgerMenu  color='white'     size={40} ref={btnRef}  onClick={onOpen}   />
//           <Drawer
//         isOpen={isOpen}
//         placement='right'
//         onClose={onClose}
//         finalFocusRef={btnRef}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader></DrawerHeader>
         
//           <DrawerBody>
//           <Button variant='outline' mr={6} width={150}  onClick={onClose} >
//               <a style={{textDecoration:"none"}} href="#">Home</a>
//             </Button>
//             <Button my={10} variant='outline' mr={6} width={150} onClick={onClose} >
//             <a style={{textDecoration:"none"}} href="#aboutme">About Me</a>
//             </Button>
//             <Button  variant='outline' mr={6} width={150} onClick={onClose}>
//             <a style={{textDecoration:"none"}} href="#myskillsmain">My Skills</a>
//             </Button>
//             <Button my={10} variant='outline' mr={6} width={150} onClick={onClose}>
//             <a style={{textDecoration:"none"}} href="#myprojects">My Projects</a>
//             </Button>
//             <Button  variant='outline' mr={6} width={150} onClick={onClose}>
//             <a style={{textDecoration:"none"}} href="#myprojects">My Statistics</a>
//             </Button>
//             <Button my={10} variant='outline' mr={6} width={150} onClick={onClose}>
//             <a style={{textDecoration:"none"}} href="#contact">Let's Get In Touch</a>
//             </Button>

//             <Button color="white" bg="blue" mr={6} width={250} onClick={onClose}>
//             <a style={{textDecoration:"none"}} href="https://drive.google.com/file/d/1NDlDVTUhEjf4quPFjS6bshmHNXHNkq0d/view?usp=sharing" download="Thejaswaroop.pdf" className='btnnavbar'>
//           <h3>Download Resume</h3>
//           </a>
//             </Button>

//           </DrawerBody>

          
//         </DrawerContent>
//       </Drawer>
        
//         </div>
//         <div>
//           <SiAppannie size={50} color="white"/>
//         </div>
//         <div>
//         <button id='downloadbtn'>
//         <a style={{textDecoration:"none"}} href="https://drive.google.com/file/d/1NDlDVTUhEjf4quPFjS6bshmHNXHNkq0d/view?usp=sharing" download="Thejaswaroop.pdf" className='btnnavbar'>
//           <h3>Download Resume
//             <HiDownload size={22} color="white"/>
//           </h3>
//         </a>
          
//           </button>
//         </div>
//       </div>
//     );
// }

// export default Navbar;

import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import "./Navbar.css"
import {ImSpinner9} from "react-icons/im"
import { HamburgerIcon, CloseIcon, AddIcon,DownloadIcon } from '@chakra-ui/icons';

const Links = ['Home','About me', 'My Skills', 'My Statistics','Let s Get In Touch'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Box>
    <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
   
    >
    {children}
  </Link>
  {/* <Link href='#aboutme'>{children}</Link> */}
  </Box>
  
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div id='navbarmain'>
      <Box bg={useColorModeValue('gray.600', 'gray.900')}  px={4}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'lg'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            // color={"black"}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <ImSpinner9 color='white' size={39}/>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
             
             <button className='btng'>
              <a id='a' href="#">Home</a>
             </button>
             <button className='btng'>
              <a id='a' href="#aboutme">About Me</a>
             </button>
             <button className='btng'>
              <a id='a' href="#myskillsmain">My Skills</a>
             </button>
             <button className='btng'>
              <a id='a' href="#myprojects">My Projects</a>
             </button>
             <button className='btng'>
              <a id='a' href="#mystatisticsmain">My Statistics</a>
             </button>
             <button className='btng'>
              <a id='a' href="#contact">Contact</a>
             </button>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'red'}
              size={'lg'}
              border={'none'}
              borderRadius={'10'}
              mr={4}
              rightIcon={<DownloadIcon />}>
                 <a style={{textDecoration:"none"}} href="https://drive.google.com/file/d/1NDlDVTUhEjf4quPFjS6bshmHNXHNkq0d/view?usp=sharing" download="Thejaswaroop.pdf" className='btnnavbar'  target="_blank">Download</a>
             
            </Button>
            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu> */}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'}>
            <button className='btnn'>
              <a id='a' href="#">Home</a>
             </button>
             <button className='btnn'>
              <a id='a' href="#aboutme">About Me</a>
             </button>
             <button className='btnn'>
              <a id='a' href="#myskillsmain">My Skills</a>
             </button>
             <button className='btnn'>
              <a id='a' href="#myprojects">My Projects</a>
             </button>
             <button className='btnn'>
              <a id='a' href="#mystatisticsmain">My Statistics</a>
             </button>
             <button className='btnn'>
              <a id='a' href="#contact">Contact</a>
             </button>
              

            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </div>
  );
}

// export default Navbar