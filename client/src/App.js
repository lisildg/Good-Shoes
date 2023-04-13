
import React from "react";
import {Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route  path='/' component={LandingPage}/>
     </Routes>
    </div>
  );
}

export default App;
