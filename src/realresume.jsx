const Resume = () => {
    return (
      <div className="centring-div">
      <div className="mockup-browser bg-base-300 border" style={{width:'80%'}}>
        <div className="mockup-browser-toolbar text-black">
          <div className="input">https://Resume</div>
        </div>
        <div className="bg-base-200 flex justify-center px-4 py-16">
          <iframe
            src="/resume.pdf"
            width="100%"
            height="600px"
            title="Resume"
            className="border-2 border-gray-300 rounded-lg"
          ></iframe>
        </div>
      </div> </div>
    );
  };
  
  export default Resume;
  