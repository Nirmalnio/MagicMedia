import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import Routing from './routes';
import './assets/css/animate.min.css';
import './assets/css/aos.css';
import './assets/css/bootstrap.min.css';
import './assets/css/icofont.min.css';
import './assets/css/magnific-popup.min.css';
import './assets/css/responsive.css';
import './assets/css/style.css';
import Socialbar from './components/socialbar';
import loade from "../src/assets/images/Magic Media White VGIF.gif"
function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set a 3-second timer

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <>
      <Router >
      {isLoading ?
       <div className='loaderDiv'>
          <div>
          <img src={loade} alt='loader'/>
          <span>Magic Media</span>
          </div>
       </div>:
        <>
        <Routing />
        <Socialbar/>
        </>}
      </Router>
    </>
  );
}

export default App;
