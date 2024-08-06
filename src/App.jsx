import './App.css';
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactMe from './contactme';
import Resume from './resume';
import Aboutme from './aboutme';
import Projects from './projects';
const App = () => {
  return (
    <Router>
    <div>
    <div className="navbar-container">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/resume" element ={<Resume/> }/>
        <Route path="/about" element ={<Aboutme/> }/>
        <Route path="/projects" element ={<Projects/> }/>


      </Routes>
    </div>
  </Router>
  );
};

export default App;
