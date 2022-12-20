import React from 'react';
import GitCalender from './GitCalender';
import './Mystatitics.css'
// import GitCalender from 'c:/users/lenovo/downloads/gitcalender';
function Mystatitics(props) {
    return (
        <div id='statistics'>
            <h1 id='headingstatistics' >Github Statistics</h1>

            <div id='mystatisticsmain'>
                <div>

                <img src="https://github-readme-stats.vercel.app/api?username=Swarooptheja&show_icons=true&theme=swift" alt="" />
                </div>
                <div>
                    <img src="https://github-readme-streak-stats.herokuapp.com/?user=Swarooptheja&theme=swift" alt="" />
                </div>
            </div>
            <div>
                <GitCalender/>
            </div>
        </div>
    );
}

export default Mystatitics;