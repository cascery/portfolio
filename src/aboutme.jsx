import julianImage from './assets/astronaut.png';
import Information from './information';
const Aboutme=()=>{

return (




    <div >
   <div className="hero-content flex-col lg:flex-row">
  
 
  <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-25 rounded-full">
    <div className="rotating-border">
           <img src={julianImage} alt="Julian Casablancas" className="profile-image" />
         </div>
    </div>
  </div>
  <div className="chat-bubble chat-bubble-secondary">Scroll down a bit to know more about me  and check out my socials at the bottom!.</div>
</div>





 
</div>
<Information/>

   
<div className="flex w-full justify-center space-x-4">
  <div className="card rounded-box grid h-20 place-items-center">
    <button className="btn btn-active btn-primary">
      <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z"></path>
        </g>
      </svg>
      LinkedIn
    </button>
  </div>

  <div className="card rounded-box grid h-20 place-items-center">
    <button className="btn btn-active btn-primary">
      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"></path>
        </g>
      </svg>
      Facebook
    </button>
  </div>
</div>






<div className="flex w-full justify-center space-x-4">
  <div className="card rounded-box grid h-20 place-items-center">
  <button className="btn btn-active btn-primary">
      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM7.5316 7.08431L7.53366 7.08355L7.53604 7.08267L7.54087 7.08091L7.55081 7.07737L7.57182 7.07025C7.58633 7.06549 7.60182 7.06074 7.6183 7.05608C7.65128 7.04675 7.68807 7.03782 7.72867 7.02994C8.20584 6.93729 9.0031 7.02006 10.1532 7.80058C10.1818 7.81993 10.2105 7.83971 10.2394 7.85992C10.2789 7.85029 10.3184 7.84099 10.3579 7.83202C11.4419 7.58611 12.5581 7.58611 13.6421 7.83202C13.6816 7.84099 13.7211 7.85028 13.7605 7.8599C13.7894 7.83969 13.8181 7.81993 13.8466 7.80058C14.9921 7.02276 15.7861 6.9371 16.2648 7.02957C16.3062 7.03756 16.3438 7.04667 16.3774 7.05621C16.3942 7.06098 16.41 7.06584 16.4248 7.07072L16.4462 7.07802L16.4564 7.08166L16.4613 7.08347L16.4637 7.08437L16.4649 7.08482L16.4661 7.08527C16.7354 7.1865 16.948 7.39879 17.0497 7.6679C17.0578 7.68938 17.0658 7.71087 17.0735 7.73236C17.3441 8.4823 17.4189 9.29796 17.297 10.0849C17.2897 10.1321 17.2816 10.1792 17.2729 10.2262C17.3025 10.2737 17.3312 10.3217 17.3591 10.3703C17.7894 11.1208 18.0102 11.9955 17.9996 12.8811C17.9985 14.7913 17.4961 16.151 16.5726 17.0527C15.6687 17.9353 14.517 18.2221 13.5643 18.3377L13.5629 18.3379C12.509 18.5143 11.488 18.5233 10.4308 18.366L10.4004 18.3619C9.45151 18.233 8.30946 17.9315 7.41451 17.0443C6.50083 16.1385 6.00148 14.7825 6.00036 12.8811C5.98983 11.9955 6.21063 11.1208 6.64093 10.3703C6.66873 10.3218 6.69739 10.2739 6.72693 10.2265C6.71815 10.1794 6.71008 10.1322 6.70271 10.0849C6.58079 9.30157 6.65298 8.48972 6.91854 7.74178C6.92686 7.71832 6.93539 7.69491 6.9441 7.67156C7.04549 7.39999 7.26002 7.18567 7.5316 7.08431Z" fill="#323232"></path> </g></svg>
      github
    </button>
  </div>

  <div className="card rounded-box grid h-20 place-items-center">
  <button className="btn btn-active btn-primary">
      <svg width="20px" height="20px" viewBox="0 0 960 960" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M282.554 305.916C335.787 349.961 402.104 368.638 470.519 367.04C475.413 367.339 477.111 365.342 478.409 360.947C498.784 272.058 603.253 221.122 670.968 295.529C683.653 291.734 715.113 267.664 725.3 274.356C729.495 277.651 730.594 282.745 726.499 285.941C716.312 295.629 710.319 307.814 704.626 320.398C716.212 318.201 728.696 311.509 740.481 314.006C768.646 333.182 696.237 347.964 700.931 386.715C698.234 514.555 637.011 634.306 506.674 669.561C432.666 690.935 349.171 701.621 276.561 669.661C244.501 650.485 282.354 642.096 299.633 637.502C321.106 629.911 341.68 619.424 360.157 606.341C332.691 584.468 235.013 547.619 254.389 512.363C256.987 507.568 265.575 511.663 270.569 513.959C288.045 520.651 305.52 527.945 323.197 534.139C315.01 525.847 306.215 518.353 298.227 510.263C230.714 443.098 235.708 341.613 282.554 305.916Z" fill="#323232"></path> </g></svg>
      twitter
    </button>
  </div>
</div>






</div>

  
)




}
export default Aboutme;