import React from "react";
import ProfileImage from "./profileimage.jsx";
import julianImage from './assets/astronaut.png';

const Home = () => {
  return (
    <div className="hero min-h-screen" style={{ margin: '0', padding: '0' }}>
      <div className="hero-content flex-col lg:flex-row"style={{ margin: '0', padding: '0' }}>
        <div className="card rounded-box grid h-32 flex-grow place-items-center">
          <div className="flex w-52 flex-col gap-16">
            <div className="flex items-center gap-20">
              <div className="h-32 w-32 shrink-0 rounded-full">
                <div className="rotating-border">
                  <img src={julianImage} alt="Julian Casablancas" className="profile-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card text-neutral-content w-96">
      
          <h1 className="text-5xl text-white font-bold">Aya Kechroud </h1>
          <p className="py-6 text-white">
         
    <blockquote>
        <p className="text-2xl italic font-light text-gray-900 dark:text-white">"
        There was no choice but to be pioneers; no time to be anyone but pathfinders.  
          
         "
          </p>
           <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400"> -Margaret Hamilton</cite>
    </blockquote>
          </p>
          <button className="btn btn-secondary">Get in touch +</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
