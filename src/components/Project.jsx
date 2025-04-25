import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import p1 from "../assets/portfolio/p1.png"
import p2 from "../assets/portfolio/p2.png"
import p3 from "../assets/portfolio/p3.png"
import p4 from "../assets/portfolio/p4.png"
import p5 from "../assets/portfolio/p5.png"
import p6 from "../assets/portfolio/p6.png"
import { FaGithub, FaLink } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init();
    // Check if the screen is mobile size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint is 768px
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const project = [
    {
      imgUrl: p1,
      title: 'JobPrepper',
      description: "JobPrepper is a career assistance platform built with Next.js, TypeScript, and Prisma, designed to streamline resume building and interview preparation. It enabling users to craft professional resumes effortlessly while providing AI-driven interview guidance.",
      githubLink: 'https://github.com/ravijat2026/JobPrepper',
      projectLink: 'https://job-prepper.vercel.app/',
    },
    {
      imgUrl: p2,
      title: 'QueryMaster',
      description: "QueryMaster is an AI-powered content generator built with Next.js, React, TypeScript, and Tailwind CSS, leveraging Gemini AI for personalized content creation. It features secure authentication and efficient database management using Drizzle ORM with PostgreSQL.",
      githubLink: 'https://github.com/ravijat2026/Ai-Content-Generator',
      projectLink: 'https://querymaster.vercel.app/',
    },
    {
      imgUrl: p3,
      title: 'BlogAura',
      description: 'BlogAura is a full-stack blogging platform built with React.js, Node.js, Express.js, and MongoDB, designed for seamless content creation and management. It features secure authentication with JWT and OTP-based login, ensuring robust security.',
      githubLink: 'https://github.com/ravijat2026/BlogAura',
      projectLink: 'https://blog-aura.vercel.app/'
    },
    {
      imgUrl: p4,
      title: 'E-com',
      description: 'This e-commerce platform allows users to browse and purchase products with ease, featuring a secure login and signup system. The admin dashboard enables the creation, update, and deletion of products and categories.',
      githubLink: 'https://github.com/ravijat2026/E-com',
      projectLink: 'https://e-com-murex-two.vercel.app/'
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
  ];


  const displayedProjects = isMobile ? (showAll ? project : project.slice(0, 3)) : project;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div name="Projects" className="p-5 mx-20 mb-10 mt-10 min-h-screen max-sm:p-2 max-sm:mx-5">
      <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl my-5 max-sm:text-4xl">
        Projects
      </h1>
    
      <div
        className="flex gap-7 justify-between items-center flex-row-reverse max-sm:flex-col"
        data-aos="fade-right"
      >
        <div className='flex flex-row flex-wrap justify-center items-center text-[#00040f] dark:text-[#e1e1e1]'>
          {displayedProjects.map(({imgUrl, title, description, githubLink, projectLink}) => (
            <div
              key={title}
              className="w-[360px] h-[460px] dark:bg-[#1c2837] flex flex-col md:ml-10 lg:ml-16 justify-between rounded-2xl shadow-2xl p-4 border-1 my-7 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <a href={projectLink} className='cursor-pointer'>
                <img className='rounded-xl mb-4 h-48' src={imgUrl} alt={title} />
              </a>
              <div>
                <h2 className='text-2xl font-bold mb-2'>{title}</h2>
                <p className='text-[11px] md:text-[13px] mb-2'>{description}</p>
              </div>
              <div className='flex flex-row items-center justify-center gap-4'>
                <a
                  className='w-fit text-[12px] px-6 py-3 my-2 flex items-center rounded-full text-center bg-[#c6d0dd] hover:bg-[#c9dbf3] dark:bg-[#334155] dark:hover:bg-[#1e293b] cursor-pointer'
                  href={githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub className='mr-2 text-[16px]'/>Github
                </a>
                <a
                  className='w-fit text-[12px] px-6 py-3 my-2 flex items-center rounded-full text-center bg-[#c6d0dd] hover:bg-[#c9dbf3] dark:bg-[#334155] dark:hover:bg-[#1e293b] cursor-pointer'
                  href={projectLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaLink className='mr-2 text-[16px]'/>Live Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show button only on mobile devices */}
      {isMobile && project.length > 3 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={toggleShowAll}
            className="px-8 py-3 rounded-full font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out shadow-lg flex items-center gap-2"
          >
            {showAll ? (
              <>
                Show Less
                <FiChevronUp className="inline" />
              </>
            ) : (
              <>
                See More
                <FiChevronDown className="inline" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  )
}

export default Project