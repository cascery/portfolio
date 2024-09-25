/* eslint-disable no-unused-vars */
import julianImage from './assets/astronaut.png';
import avocatconnect from './assets/avocatconnect.png'
import lucidlog from './assets/lucidlog.png'
import echomatch from './assets/echomatch.png'
import folder from './assets/folder.png';
import EchoMatchContent from './EchomatchContent';
import bunnybuddies from './assets/bunnybuddies.png'
const Projects = () => {
  
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  " >



{/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box p-0 max-w-5xl border border-black overflow-hidden">
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










      
       <div className="hero-content flex-col lg:flex-row">
  
 
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

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={lucidlog}
            alt="Astronaut"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center text-black">
          <h2 className="card-title">LucidLog</h2>
          <p>a place to write down and record your dreams</p>
          <div className="card-actions">
            <button className="btn btn-primary"
            
            
            onClick={() => {
              
              window.location.href = 'https://github.com/cascery/lucidlog'; }}
            >
              
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM7.5316 7.08431L7.53366 7.08355L7.53604 7.08267L7.54087 7.08091L7.55081 7.07737L7.57182 7.07025C7.58633 7.06549 7.60182 7.06074 7.6183 7.05608C7.65128 7.04675 7.68807 7.03782 7.72867 7.02994C8.20584 6.93729 9.0031 7.02006 10.1532 7.80058C10.1818 7.81993 10.2105 7.83971 10.2394 7.85992C10.2789 7.85029 10.3184 7.84099 10.3579 7.83202C11.4419 7.58611 12.5581 7.58611 13.6421 7.83202C13.6816 7.84099 13.7211 7.85028 13.7605 7.8599C13.7894 7.83969 13.8181 7.81993 13.8466 7.80058C14.9921 7.02276 15.7861 6.9371 16.2648 7.02957C16.3062 7.03756 16.3438 7.04667 16.3774 7.05621C16.3942 7.06098 16.41 7.06584 16.4248 7.07072L16.4462 7.07802L16.4564 7.08166L16.4613 7.08347L16.4637 7.08437L16.4649 7.08482L16.4661 7.08527C16.7354 7.1865 16.948 7.39879 17.0497 7.6679C17.0578 7.68938 17.0658 7.71087 17.0735 7.73236C17.3441 8.4823 17.4189 9.29796 17.297 10.0849C17.2897 10.1321 17.2816 10.1792 17.2729 10.2262C17.3025 10.2737 17.3312 10.3217 17.3591 10.3703C17.7894 11.1208 18.0102 11.9955 17.9996 12.8811C17.9985 14.7913 17.4961 16.151 16.5726 17.0527C15.6687 17.9353 14.517 18.2221 13.5643 18.3377L13.5629 18.3379C12.509 18.5143 11.488 18.5233 10.4308 18.366L10.4004 18.3619C9.45151 18.233 8.30946 17.9315 7.41451 17.0443C6.50083 16.1385 6.00148 14.7825 6.00036 12.8811C5.98983 11.9955 6.21063 11.1208 6.64093 10.3703C6.66873 10.3218 6.69739 10.2739 6.72693 10.2265C6.71815 10.1794 6.71008 10.1322 6.70271 10.0849C6.58079 9.30157 6.65298 8.48972 6.91854 7.74178C6.92686 7.71832 6.93539 7.69491 6.9441 7.67156C7.04549 7.39999 7.26002 7.18567 7.5316 7.08431Z" fill="#323232"></path> </g></svg>

              github link</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl"

      data-modal-target="static-modal" data-modal-toggle="static-modal"
      >      
        
        
        
          <figure className="px-10 pt-10">
          <img
            src={bunnybuddies}
            alt="Astronaut"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center text-black">
          <h2 className="card-title">BunnyBuddies</h2>
          <p>A social media app,post pictures and connect with firends</p>
          <div className="card-actions">
            <button className="btn btn-primary">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM7.5316 7.08431L7.53366 7.08355L7.53604 7.08267L7.54087 7.08091L7.55081 7.07737L7.57182 7.07025C7.58633 7.06549 7.60182 7.06074 7.6183 7.05608C7.65128 7.04675 7.68807 7.03782 7.72867 7.02994C8.20584 6.93729 9.0031 7.02006 10.1532 7.80058C10.1818 7.81993 10.2105 7.83971 10.2394 7.85992C10.2789 7.85029 10.3184 7.84099 10.3579 7.83202C11.4419 7.58611 12.5581 7.58611 13.6421 7.83202C13.6816 7.84099 13.7211 7.85028 13.7605 7.8599C13.7894 7.83969 13.8181 7.81993 13.8466 7.80058C14.9921 7.02276 15.7861 6.9371 16.2648 7.02957C16.3062 7.03756 16.3438 7.04667 16.3774 7.05621C16.3942 7.06098 16.41 7.06584 16.4248 7.07072L16.4462 7.07802L16.4564 7.08166L16.4613 7.08347L16.4637 7.08437L16.4649 7.08482L16.4661 7.08527C16.7354 7.1865 16.948 7.39879 17.0497 7.6679C17.0578 7.68938 17.0658 7.71087 17.0735 7.73236C17.3441 8.4823 17.4189 9.29796 17.297 10.0849C17.2897 10.1321 17.2816 10.1792 17.2729 10.2262C17.3025 10.2737 17.3312 10.3217 17.3591 10.3703C17.7894 11.1208 18.0102 11.9955 17.9996 12.8811C17.9985 14.7913 17.4961 16.151 16.5726 17.0527C15.6687 17.9353 14.517 18.2221 13.5643 18.3377L13.5629 18.3379C12.509 18.5143 11.488 18.5233 10.4308 18.366L10.4004 18.3619C9.45151 18.233 8.30946 17.9315 7.41451 17.0443C6.50083 16.1385 6.00148 14.7825 6.00036 12.8811C5.98983 11.9955 6.21063 11.1208 6.64093 10.3703C6.66873 10.3218 6.69739 10.2739 6.72693 10.2265C6.71815 10.1794 6.71008 10.1322 6.70271 10.0849C6.58079 9.30157 6.65298 8.48972 6.91854 7.74178C6.92686 7.71832 6.93539 7.69491 6.9441 7.67156C7.04549 7.39999 7.26002 7.18567 7.5316 7.08431Z" fill="#323232"></path> </g></svg>

              github link</button>
          </div>
        </div>
      </div>


      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={avocatconnect}
            alt="Astronaut"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center text-black">
          <h2 className="card-title">AvocatConnect</h2>
          <p>ask legal questions!request services from lawyers!</p>
          <div className="card-actions">
            <button className="btn btn-primary"  onClick={() => {
              
              window.location.href = 'https://github.com/cascery/connectlawyer'; }}>
              
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM7.5316 7.08431L7.53366 7.08355L7.53604 7.08267L7.54087 7.08091L7.55081 7.07737L7.57182 7.07025C7.58633 7.06549 7.60182 7.06074 7.6183 7.05608C7.65128 7.04675 7.68807 7.03782 7.72867 7.02994C8.20584 6.93729 9.0031 7.02006 10.1532 7.80058C10.1818 7.81993 10.2105 7.83971 10.2394 7.85992C10.2789 7.85029 10.3184 7.84099 10.3579 7.83202C11.4419 7.58611 12.5581 7.58611 13.6421 7.83202C13.6816 7.84099 13.7211 7.85028 13.7605 7.8599C13.7894 7.83969 13.8181 7.81993 13.8466 7.80058C14.9921 7.02276 15.7861 6.9371 16.2648 7.02957C16.3062 7.03756 16.3438 7.04667 16.3774 7.05621C16.3942 7.06098 16.41 7.06584 16.4248 7.07072L16.4462 7.07802L16.4564 7.08166L16.4613 7.08347L16.4637 7.08437L16.4649 7.08482L16.4661 7.08527C16.7354 7.1865 16.948 7.39879 17.0497 7.6679C17.0578 7.68938 17.0658 7.71087 17.0735 7.73236C17.3441 8.4823 17.4189 9.29796 17.297 10.0849C17.2897 10.1321 17.2816 10.1792 17.2729 10.2262C17.3025 10.2737 17.3312 10.3217 17.3591 10.3703C17.7894 11.1208 18.0102 11.9955 17.9996 12.8811C17.9985 14.7913 17.4961 16.151 16.5726 17.0527C15.6687 17.9353 14.517 18.2221 13.5643 18.3377L13.5629 18.3379C12.509 18.5143 11.488 18.5233 10.4308 18.366L10.4004 18.3619C9.45151 18.233 8.30946 17.9315 7.41451 17.0443C6.50083 16.1385 6.00148 14.7825 6.00036 12.8811C5.98983 11.9955 6.21063 11.1208 6.64093 10.3703C6.66873 10.3218 6.69739 10.2739 6.72693 10.2265C6.71815 10.1794 6.71008 10.1322 6.70271 10.0849C6.58079 9.30157 6.65298 8.48972 6.91854 7.74178C6.92686 7.71832 6.93539 7.69491 6.9441 7.67156C7.04549 7.39999 7.26002 7.18567 7.5316 7.08431Z" fill="#323232"></path> </g></svg>

              github link</button>
          </div>
        </div>
      </div>





      <div className="card bg-base-100 w-96 shadow-xl" 


onClick={()=>document.getElementById('my_modal_3').showModal()}
      >      
        
        
        
          <figure className="px-10 pt-10">
          <img
            src={echomatch}
            alt="Astronaut"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center text-black">
          <h2 className="card-title">EchoMatch</h2>
          <p>Looking for similar songs to your fav?search for it here!</p>
          <div className="card-actions">
            <button className="btn btn-primary">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM7.5316 7.08431L7.53366 7.08355L7.53604 7.08267L7.54087 7.08091L7.55081 7.07737L7.57182 7.07025C7.58633 7.06549 7.60182 7.06074 7.6183 7.05608C7.65128 7.04675 7.68807 7.03782 7.72867 7.02994C8.20584 6.93729 9.0031 7.02006 10.1532 7.80058C10.1818 7.81993 10.2105 7.83971 10.2394 7.85992C10.2789 7.85029 10.3184 7.84099 10.3579 7.83202C11.4419 7.58611 12.5581 7.58611 13.6421 7.83202C13.6816 7.84099 13.7211 7.85028 13.7605 7.8599C13.7894 7.83969 13.8181 7.81993 13.8466 7.80058C14.9921 7.02276 15.7861 6.9371 16.2648 7.02957C16.3062 7.03756 16.3438 7.04667 16.3774 7.05621C16.3942 7.06098 16.41 7.06584 16.4248 7.07072L16.4462 7.07802L16.4564 7.08166L16.4613 7.08347L16.4637 7.08437L16.4649 7.08482L16.4661 7.08527C16.7354 7.1865 16.948 7.39879 17.0497 7.6679C17.0578 7.68938 17.0658 7.71087 17.0735 7.73236C17.3441 8.4823 17.4189 9.29796 17.297 10.0849C17.2897 10.1321 17.2816 10.1792 17.2729 10.2262C17.3025 10.2737 17.3312 10.3217 17.3591 10.3703C17.7894 11.1208 18.0102 11.9955 17.9996 12.8811C17.9985 14.7913 17.4961 16.151 16.5726 17.0527C15.6687 17.9353 14.517 18.2221 13.5643 18.3377L13.5629 18.3379C12.509 18.5143 11.488 18.5233 10.4308 18.366L10.4004 18.3619C9.45151 18.233 8.30946 17.9315 7.41451 17.0443C6.50083 16.1385 6.00148 14.7825 6.00036 12.8811C5.98983 11.9955 6.21063 11.1208 6.64093 10.3703C6.66873 10.3218 6.69739 10.2739 6.72693 10.2265C6.71815 10.1794 6.71008 10.1322 6.70271 10.0849C6.58079 9.30157 6.65298 8.48972 6.91854 7.74178C6.92686 7.71832 6.93539 7.69491 6.9441 7.67156C7.04549 7.39999 7.26002 7.18567 7.5316 7.08431Z" fill="#323232"></path> </g></svg>

              github link</button>
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
