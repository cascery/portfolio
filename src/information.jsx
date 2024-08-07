import React from 'react';

const Information = () => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="description" content="Full Stack Web Developer" />
      <meta name="keywords" content="resume,cv,Thomas Leon Highbaugh" />
      <meta name="author" content="Thomas Leon Highbaugh" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        rel="stylesheet"
      />
      <link
        rel="preload"
        href="./fonts/Jost-Medium.woff2"
        as="font"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <link href="./build.css" rel="stylesheet" />
      <title>Geoffrey Gallagher — Resume</title>
    </head>
    <body>
      <main className="font-jost hyphens-manual">
        <section className="p-3 my-auto mx-auto max-w-3xl  rounded-2xl border-4 border-indigo-400 sm:p-9 md:p-16 lg:mt-6 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o xsm:p-8 print:bg-white md:max-w-letter md:h-letter lg:h-letter">
          <header className="inline-flex justify-between items-baseline mb-2 w-full align-top border-b-4 border-gray-300">
          
        
          </header>
          <section className="col-gap-8 print:col-count-2 print:h-letter-col-full col-fill-balance md:col-count-2 md:h-letter-col-full">
            <section className="flex-col">
            
              <section className="pb-2 pb-4 mt-0 border-b-4 border-gray-300 first:mt-0">
                <section className="break-inside-avoid">
                  <h2 className="mb-2 text-xl font-bold tracking-widest text-custom-pink print:font-normal">
                    SUMMARY
                  </h2>
                  <section className="mb-2 break-inside-avoid">
                    <p className="mt-2 leading-normal text-white text-md">
                    Recent Computer Science graduate with a robust foundation in
                     programming and software engineering principles. Proficient in Java, 
                     C/C++, PHP, HTML, CSS, JavaScript, ReactJS, and MySQL. Demonstrated expertise
                      in web application development, with a strong focus on software development 
                      best practices. 
                  
                    </p>
                  </section>
                </section>
              </section>
              <section className="pb-0 mt-2 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
                <section className="break-inside-avoid">
                  <h2 className="mb-2 text-lg font-bold tracking-widest  text-custom-pink print:font-normal">
                    EDUCATION
                  </h2>
                  <section className="mt-2 border-b-2 break-inside-avoid">
                    <header>
                      <h3 className="text-lg font-semibold text-custom-purple leading-snugish">
                    souk ahras University  
                                           </h3>
                      <p className="leading-normal text-gray-300 text-md">
                        2021 &ndash; 2024 | Computer Science
                      </p>
                    </header>
                    <ul className="mt-2 list-disc list-inside text-text-gray-300 text-md">
                     
                     
                      <li>
                        <span className="font-semibold text-md text-gray-300">
                          GPA:
                        </span>
                        3.9
                      </li>
                     
                    </ul>
                  </section>
                 
                </section>
              </section>
             
              <section className="pb-4 mt-2 mb-4 border-b-4 border-gray-300 break-inside-avoid">
                <section className="break-inside-avoid">
                  <h2 className="mb-2 text-lg font-bold tracking-widest text-custom-pink print:font-normal">
                    SKILLS
                  </h2>
                  <section className="flex-wrap pb-0 mb-2 mt-2 break-inside-avoid">
                    <header className="mt-4 mb-2 font-bold tracking-widest  uppercase text-md text-custom-purple">
                      Front-End Development
                    </header>
                    <ul className="flex-wrap pb-4 mt-2 list-inside list-disc text-md text-white">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>React.js</li>
                      <li>Bootstrap</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </section>
                  <section className="pb-0 mt-2 mb-2 break-inside-avoid">
                    <header className="mt-4 mb-2 font-bold tracking-widest  uppercase text-md  text-custom-purple">
                      Back-End Development
                    </header>
                    <ul className="flex-wrap pb-4 mt-2 list-inside list-disc text-md text-white">
                      <li>PHP</li>
                      <li>SQL</li>
                      <li>NoSQL</li>
                      <li>Java</li>
                    </ul>
                  </section>
                  <section className="pb-0 mt-2 mb-2 break-inside-avoid">
                    <header className="mt-4 mb-2 font-bold tracking-widest uppercase text-md  text-custom-purple">
                      Tools & Technologies
                    </header>
                    <ul className="flex-wrap pb-4 mt-2 list-inside list-disc text-md">
                      <li>Git</li>
                      <li>RESTful APIs</li>
                      <li>Agile/Scrum</li>
                    </ul>
                  </section>
                  <section className="pb-0 mt-2 mb-2 break-inside-avoid">
                    <header className="mt-4 mb-2 font-bold tracking-widest uppercase text-md  text-custom-purple">
                      Soft Skills
                    </header>
                    <ul className="flex-wrap pb-4 mt-2 list-inside list-disc text-md  text-custom-purple">
                      <li>Communication</li>
                      <li>Team Collaboration</li>
                      <li>Problem-Solving</li>
                      <li>Time Management</li>
                      <li>Adaptability</li>
                    </ul>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </main>
    </body>
  </html>
);

export default Information;
