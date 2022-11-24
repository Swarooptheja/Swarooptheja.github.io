import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import Allroutes from './components/Allroutes';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Myskills from './components/Myskills';
import Myprojects from './components/Myprojects';
import Mystatitics from './components/Mystatitics';
import Getintouch from './components/Getintouch';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
       {/* <Allroutes/> */}
       <Aboutme/>
       <Myskills/>
       <Myprojects/>
       <Mystatitics/>
       <Getintouch/>
    </div>
  );
}

export default App;
