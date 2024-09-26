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
import { faPhp } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
const ACC = () => {
    return (
        <div className=' flex-col'>


<div className=" rounded-xl card lg:card-side  shadow-l m-6 bg-red-50 shadow-2xl border border-black">
  <figure >
    <img
      src={avocatconnect}
    
      alt="Album" />
  </figure>
  <div className="card-body text-black bg-red-50 rounded-xl  ">
    <h2 className="card-title">AVOCATCONNECT</h2>
    <p>Ask a legal question,hire a lawyer,find answer to your legal questions.</p>
    <div className="join join-vertical lg:join-horizontal">
  <button className="btn join-item ">
    

  <FontAwesomeIcon icon={faPhp} size="2x" style={{ color: '#510205' }} />

  </button>
  <button className="btn join-item ">
    

  <FontAwesomeIcon icon={faDatabase} size="2x" style={{ color: '#510205' }} />
  
    </button>
  <button className="btn join-item ">      <FontAwesomeIcon icon={faReact} size="2x" style={{ color: '#510205' }} /> {/* Adjust size as needed */}</button>
  
</div>


    <div className="card-actions justify-end">
      <button className="btn btn-primary">github</button>
    </div>
  </div>
</div>
<div className="grid place-items-center">
<div className="mockup-browser bg-base-300 border">
  <div className="mockup-browser-toolbar">
    <div className="input">https://daisyui.com</div>

  </div>
  <div className="bg-base-200 flex justify-center px-4 py-16 text-black">Hello!</div>
</div>
<div className="mockup-code">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
  <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
  <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
</div></div>
      
    </div>
    );
};

export default ACC;
