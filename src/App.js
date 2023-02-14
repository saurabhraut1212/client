import {BrowserRouter as Router} from "react-router-dom"
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Routess from "./Components/Routess";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routess/>
      </Router>
    </div>
  );
}

export default App;
