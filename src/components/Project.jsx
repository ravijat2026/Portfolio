import React, { useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import p1 from "../assets/portfolio/p1.png"
import p2 from "../assets/portfolio/p2.png"
import p3 from "../assets/portfolio/p3.png"
import p4 from "../assets/portfolio/p4.png"
import p5 from "../assets/portfolio/p5.png"
import p6 from "../assets/portfolio/p6.png"
const Project = () => {

  useEffect(() => {
    AOS.init();
  }, []);



  const project = [
    {
      imgUrl: p1,
      title: 'E-com',
      description: 'This e-commerce platform allows users to browse and purchase products with ease, featuring a secure login and signup system. The admin dashboard enables the creation, update, and deletion of products and categories, along with user management capabilities.',
      githubLink: 'https://github.com/ravijat2026/E-com',
      projectLink: 'https://e-com-murex-two.vercel.app/'
    },
    {
      imgUrl: p2,
      title: 'Genuine Feedback',
      description: "This platform allows users to share a unique link after logging in, enabling others to send messages or feedback anonymously. The system ensures privacy and encourages open communication by keeping the sender's identity hidden while providing a smooth user experience.",
      githubLink: 'https://github.com/ravijat2026/Anonymous-Messages',
      projectLink: 'https://anonymous-messages-t6ux.vercel.app/',
    },
    {
      imgUrl: p3,
      title: 'Currency-converter',
      description: 'This currency converter allows users to easily convert between different currencies in real-time. It provides up-to-date exchange rates, ensuring accurate conversions and a user-friendly interface for quick and efficient calculations.',
      githubLink: 'https://github.com/ravijat2026/currency-converter',
      projectLink: 'https://currency-converter-two-inky.vercel.app/'
    },
    {
      imgUrl: p4,
      title: 'Password-Generator',
      description: 'This tool generates secure random passwords with customizable options. Users can set the password length and choose whether to include numbers or special characters, ensuring flexibility and enhanced security.',
      githubLink: 'https://github.com/ravijat2026/password-generator',
      projectLink: 'https://password-generator-pearl-omega.vercel.app/'
    },
    {
      imgUrl: p5,
      title: 'Weather app',
      description: 'This weather app provides real-time weather updates for any location. It features an intuitive interface, allowing users to quickly check current conditions, temperature, and forecasts with ease.',
      githubLink: 'https://github.com/ravijat2026/weather-app',
      projectLink: 'https://weather-app-two-black-17.vercel.app/'
    },
    {
      imgUrl: p6,
      title: 'Hospital Website',
      description: "This website houses the prototype codebase for our hospital's future website. The prototype demonstrates the design concept using CSS animations and JavaScript functionalities to showcase the envisioned user experience.",
      githubLink: 'https://github.com/ravijat2026/Hospital-website',
      projectLink: 'https://hospital-website-lake.vercel.app/'
    },
  ]
  return (
        <div name = "Projects" className="p-5 mx-20 mb-10 min-h-screen max-sm:p-2 max-sm:mx-5">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl   ">
          Projects
        </h1>
      
        <div
          className="flex gap-7 justify-between items-center flex-row-reverse max-sm:flex-col"
          data-aos="fade-right"
        >
        
          
            <div className='flex flex-row flex-wrap justify-between text-[#00040f] dark:text-[#e1e1e1]'>
                  {project.map(({imgUrl, title, description, githubLink, projectLink}) => (
                    <div
                    className="w-[360px] h-auto rounded-2xl p-4 border-1 my-10"
                    >
                    <a href={projectLink} className='cursor-pointer'><img className='rounded-xl mb-4 h-48' src={imgUrl} alt={title} /> </a>
                    <div>
                        <h2 className='text-2xl font-bold mb-2'>{title}</h2>
                        <p className='text-[13px] md:text-[15px]  mb-2'>{description}</p>
                        <div className='flex flex-row gap-4'>
                            {/* Code Button */}
                            <a
                                className='w-fit text-[12px] px-6 py-3 my-2 flex items-center rounded-full text-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
                                href={githubLink}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Code
                            </a>
                            {/* Live Demo Button */}
                            <a
                                className='w-fit text-[12px] px-6 py-3 my-2 flex items-center rounded-full text-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
                                href={projectLink}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                  ))}
                  
                  

              </div>
        </div>
    </div>
  )
}

export default Project