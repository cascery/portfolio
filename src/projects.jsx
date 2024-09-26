/* eslint-disable no-unused-vars */
import julianImage from './assets/astronaut.png';
import avocatconnect from './assets/avocatconnect.png'
import lucidlog from './assets/lucidlog.png'
import echomatch from './assets/echomatch.png'
import folder from './assets/folder.png';
import EchoMatchContent from './EchomatchContent';
import ACC from './AC_content'
import bunnybuddies from './assets/bunnybuddies.png'

const Projects = () => {
  
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  " >


<dialog id="my_modal_3" className="modal">
  <div className="modal-box p-0 max-w-4xl max-h-screen border border-black overflow-hidden">
    <form method="dialog" className="bg-red-300 shadow-md border border-black flex items-center justify-between p-1 w-full">
      <div className="flex items-center">
        <img src={folder} alt="Julian Casablancas" className="w-8 mr-2" />
        <span className="text-white">Project blah blah</span>
      </div>
      <button className="btn btn-sm btn-circle btn-ghost text-black">✕</button>
    </form>

    {/* Adjusted EchoMatchContent container */}
    <div className="max-h-96 overflow-y-auto"> {/* Set max height and enable scrolling */}
      <EchoMatchContent />
    </div>
  </div>
</dialog>






<dialog id="my_modal_4" className="modal">
  <div className="modal-box p-0 max-w-4xl border border-black overflow-hidden">
    <form method="dialog" className="bg-red-300 shadow-md border border-black flex items-center justify-between p-1 w-full">
      <div className="flex items-center">
        <img src={folder} alt="Julian Casablancas" className="w-8 mr-2" />
        <span className="text-white">Project blah blah</span>
      </div>
      <button className="btn btn-sm btn-circle btn-ghost text-black">✕</button>
    </form>

    {/* Adjusted EchoMatchContent container */}
    <div className="max-h-96 overflow-y-auto"> {/* Set max height and enable scrolling */}
      <ACC />
    </div>
  </div>
</dialog>





      
       <div className="hero-content flex-col lg:flex-row     cursor-pointer">
  
 
  <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-25 rounded-full">
    <div className="rotating-border">
           <img src={julianImage} alt="Julian Casablancas" className="profile-image" />
         </div>
    </div>
  </div>
  <div className="chat-bubble chat-bubble-secondary">Check out the github links to all the projects I have worked on!</div>
</div>





</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">

<div className="card bg-base-100 w-96 shadow-xl hover:bg-green-100 cursor-pointer hover:shadow-2xl hover:shadow-pink-500 transition-shadow duration-300 ease-in-out" onClick={()=>document.getElementById('my_modal_3').showModal()}>
  <figure className="px-10 pt-10">
    <img
      src={echomatch}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center text-black">
    <h2 className="card-title">ECHOMATCH</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">github link</button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl hover:bg-red-100  cursor-pointer hover:shadow-2xl hover:shadow-pink-500 transition-shadow duration-300 ease-in-out" onClick={()=>document.getElementById('my_modal_4').showModal()}>
  <figure className="px-10 pt-10">
    <img
      src={echomatch}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center text-black">
    <h2 className="card-title">avocatconnect</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">github link</button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl hover:bg-purple-100  cursor-pointer hover:shadow-2xl hover:shadow-pink-500 transition-shadow duration-300 ease-in-out" onClick={()=>document.getElementById('my_modal_3').showModal()}>
  <figure className="px-10 pt-10">
    <img
      src={echomatch}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center text-black">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">github link</button>
    </div>
  </div>
</div>



  





   


    
     
      
       </div>
       <div style={{height:'200px'}}>



        
       </div>
    </div>
  );
};

export default Projects;
