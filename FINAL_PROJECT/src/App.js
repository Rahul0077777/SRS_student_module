import axios from "axios";
import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter,Route,Routes} from "react-router-dom";

import Login from './component/Login';
import Registration from './component/Registration';
import Status from './component/Status';
import LandingPage from './component/LandingPage'
import Subregister from './component/Subregister'
import AddSubject from './component/AddSubject'



import Profile from './component/Profile';

//import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Forget from './component/Forget';

function App() {
  return (
    
   
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Navbar/>}/>
      <Route path="Registration" element={<Registration/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="Status" element={<Status/>}/>
      <Route path="/landingpage" element={<LandingPage/>}/>
      <Route path="/Subregister" element={<Subregister/>}/>
      <Route path="/Forgot" element={<Forget/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/addsub" element={<AddSubject/>}/>
      
    </Routes>
    </BrowserRouter>
    
  //  <Login/>   
  // <Profile/>
  
  // <Forget/>
  //  <Registration/>
  // <Navbar/>
  // <Home/>
  // <Status/>
 
  );
}

export default App;
