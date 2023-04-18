
import React from "react";
import {Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Register from "./components/Register/Register";
import Admin from "./components/Admin/Admin";


function App() {
  return (
    <div className="App">
      
     <Routes>
      <Route  path="/" element={<LandingPage/>}/>
      <Route path="/registro" element={<Register/>}/>
      <Route path="/admin" element={<Admin/>}/>

     </Routes>
    </div>
  );
}

export default App;
