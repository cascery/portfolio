import React from 'react';
import { Link } from 'react-router-dom';
import catsvg from './assets/cat.svg';
import './App.css';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white bg-center" style={{ marginTop: '20px', borderRadius: '30px' }}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-black bg-custom-pink">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              <li>
                <Link to="/" style={{ color: 'black' }} onMouseEnter={(e) => e.target.style.color = '#CE88AA'} onMouseLeave={(e) => e.target.style.color = 'black'}>Home</Link>
              </li>
              <li>
                <Link to="/projects" style={{ color: 'black' }} onMouseEnter={(e) => e.target.style.color = '#CE88AA'} onMouseLeave={(e) => e.target.style.color = 'black'}>projects</Link>
              </li>
              <li>
                <Link to="/resume" style={{ color: 'black' }} onMouseEnter={(e) => e.target.style.color = '#CE88AA'} onMouseLeave={(e) => e.target.style.color = 'black'}>resume</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl hidden lg:block hover:bg-custom-pink" style={{ color: 'black' }}>
            <div className="tooltip  tooltip-bottom" data-tip="home">
              <img src={catsvg} alt="Cat SVG" className="w-6 h-6" style={{ width: '4rem', height: '4rem' }} />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black">
            <li>
              <Link to="/about" className='btn-outline hover:bg-custom-pink hover:text-black' style={{ color: 'black' }}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="/projects" className='btn-outline hover:bg-custom-pink hover:text-black' style={{ color: 'black' }}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/resume" className='btn-outline hover:bg-custom-pink hover:text-black' style={{ color: 'black' }}>
                Resume
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/contactme" className="btn btn-outline hover:bg-custom-pink" style={{ borderRadius: '30px', color: 'black' }}>
            Contact +
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
