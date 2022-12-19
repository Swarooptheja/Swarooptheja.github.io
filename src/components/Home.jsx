import React from 'react';
import "./Home.css"
import Me from "../Images/Thejaswaroopimage.jpg"
import Typical from "react-typical"
import Navbar from './Navbar';
function Home(props) {
    return (
      <>
      <Navbar/>
        {/* <div id='homepagemain'style={{ backgroundImage: 
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpV82ZC57pGLPYoVDIpMVGWZHcMosHYvFyQr27yBEi7Kr5UMwmsg03_844uDsHKteLjKc&usqp=zzzzzzzzz')",
                  }}   > */}
  <div id='homepagemain'>
        <div id='homepagecontent'>
            <img id='homepageimg' src={Me} alt="" />
            
        </div>

        <div id='homepagemaintext'>
            <h1>Hi !👋,</h1>
          
             

             <h1>
             <Typical
                            loop={Infinity}
                            steps={[
                                "I'm Theja Swaroop",
                                2000,
                                "MERN Stack  Developer",
                                2000,
                                
                            ]}
                            />
             </h1>
            
        </div>
        </div>
      </>
    );
}

export default Home;