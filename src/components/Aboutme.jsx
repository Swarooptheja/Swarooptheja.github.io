import React from 'react';
import './Aboutme.css';
import {AiFillLinkedin,AiFillGithub} from "react-icons/ai"
import {FaHandPointUp} from "react-icons/fa"

function Aboutme(props) {
    return (
        <div id='aboutme' >
            <h1 id='headingaboutme'>About Me !</h1>
            <div id='aboutmemain'>

              <div>
                <img src="https://images.squarespace-cdn.com/content/v1/5769fc401b631bab1addb2ab/1541580975837-LGDSGDVK6EI6PD4KK4W5/python-2.gif" alt="" />
              </div>

              <div>
                 <h4>
                A self-motivated individual with problem
solving capability. Seeking an
opportunity that allows to best utilize
the skillset and experience within a role
of Full-Stack Web Developer. Proficiency
in solving Data Structure and Algorithm
Problems and development of projects
in remote collaboration.
                </h4>

                <div>
                <div id='icons'>
                  <div>
                    <a href="https://www.linkedin.com/in/theja-swaroop-10a1a9197/">
                    <AiFillLinkedin size={50}  />
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/Swarooptheja">
                    <AiFillGithub size={50}/>
                    </a>
                  </div>
                </div>
                <div id='tag'>
                    <h3>Let's Get In Touch  <FaHandPointUp color='yellow' size={40}/></h3> 
                </div>
              </div>

              </div>
             
            </div>

        </div>
    );
}

export default Aboutme;