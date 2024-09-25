/* eslint-disable no-unused-vars */
import React from 'react';
import { faLastfm } from '@fortawesome/free-brands-svg-icons'; // Import the Last.fm icon
import julianImage from './assets/astronaut.png';
import avocatconnect from './assets/avocatconnect.png';
import lucidlog from './assets/lucidlog.png';
import echomatch from './assets/echomatch.png';
import folder from './assets/folder.png';
import p1 from './assets/7.png';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const EchoMatchContent = () => {
    return (
        <div className=' flex-col'>


<div className="card lg:card-side bg-base-100 shadow-l m-3">
  <figure>
    <img
      src={echomatch}
      style={{width: '50%',}}
      alt="Album" />
  </figure>
  <div className="card-body text-black">
    <h2 className="card-title">ECHOMATCH</h2>
    <p>find similar songs to the one you have in mind,built using lastFm api and react native.</p>
    <div className="join join-vertical lg:join-horizontal">
  <button className="btn join-item ">

  <FontAwesomeIcon icon={faLastfm}size="2x" /> 
  </button>
  <button className="btn join-item ">      <FontAwesomeIcon icon={faReact} size="2x" /> {/* Adjust size as needed */}</button>
  
</div>


    <div className="card-actions justify-end">
      <button className="btn btn-primary">github</button>
    </div>
  </div>
</div>

        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
        <div className="mockup-phone border-primary">
  <div className="camera"></div>
  <div className="display">
    <div className="artboard artboard-demo phone-1">Hi.</div>
  </div>
</div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <div className="mockup-phone border-primary">
  <div className="camera"></div>
  <div className="display">
    <div className="artboard artboard-demo phone-1">

<img src={p1} alt=""          className="w-4/5 h-auto"/>

    </div>
  </div>
</div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div className="mockup-phone border-primary">
  <div className="camera"></div>
  <div className="display">
    <div className="artboard artboard-demo phone-1">Hi.</div>
  </div>
</div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
       
      </div>
      
    </div>
    );
};

export default EchoMatchContent;
