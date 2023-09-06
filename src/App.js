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


function App() {
  return (
    <>
      <Router >
        <Routing />
      </Router>
    </>
  );
}

export default App;
