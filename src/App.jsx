import './App.css';
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactMe from './contactme';
import Resume from './resume';
import Aboutme from './aboutme';
import Projects from './projects';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <div className='the_app_wrapper'>
        <Routes>
          {/* Routes where the Navbar is shown */}
          <Route
            path="/"
            element={
              <>
                <div className="navbar-container">
                  <Navbar />
                </div>
                <Home />
              </>
            }
          />
          <Route
            path="/contactme"
            element={
              <>
                <div className="navbar-container">
                  <Navbar />
                </div>
                <ContactMe />
              </>
            }
          />
          <Route
            path="/resume"
            element={
              <>
                <div className="navbar-container">
                  <Navbar />
                </div>
                <Resume />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <div className="navbar-container">
                  <Navbar />
                </div>
                <Aboutme />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <div className="navbar-container">
                  <Navbar />
                </div>
                <Projects />
              </>
            }
          />

          {/* Route where the Navbar is hidden (404 NotFound page) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
